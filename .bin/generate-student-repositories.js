import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
async function sh(cmd) {
    console.log('🤖', cmd);
    return new Promise(function (resolve, reject) {
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}

async function rmRf(targetFolder) {
    const cmd = 'rm -rf ' + targetFolder;
    console.log('🤖', cmd);
    try {
        await sh(cmd);
    } catch(error) {
        if (error.message.match(/Error: ENOENT: no such file or directory/)) {
            console.error('🔥');
        }
    }
} 

const excludedFolders = [
    'node_modules',
    '.bin',
    '.tests'
];

function copyFileSync(source, target) {

    let targetFile = target;

    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target, excludedFolders = []) {
    let files = [];

    const exludeRegex = excludedFolders.length > 0 
        ? new RegExp(`(${excludedFolders.join('|')})`)
        : null;
    
    if (exludeRegex && source.match(exludeRegex) === null) {
        let targetFolder = path.join(target, path.basename(source));
        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder);
        }

        if (fs.lstatSync(source).isDirectory()) {
            files = fs.readdirSync(source);
            files.forEach(function (file) {
                let curSource = path.join(source, file);

                if (fs.lstatSync(curSource).isDirectory()) {
                    copyFolderRecursiveSync(curSource, targetFolder, excludedFolders);
                } else {
                    copyFileSync(curSource, targetFolder);
                }
            });
        }
    }
}

const makeStudentRepo = async () => {
    const repoNames =  fs.readdirSync('./').filter(source => source.match(/src\.\d{2}-.*/));
    const srcName = repoNames[0];
    const targetPath = srcName.replace(/src\./, '../js-algo-');
    await rmRf(targetPath);
    copyFolderRecursiveSync('./', targetPath, excludedFolders);
    await rmRf(targetPath + '/src');
    fs.renameSync(targetPath + '/' + srcName, targetPath + '/' + 'src');
    fs.mkdirSync(`${targetPath}/.tests`);
    const testsPath = '.tests/' + srcName.replace(/src\./, '');
    console.log('😁', testsPath);

    await sh('cp -rp ' + testsPath + ' ' + targetPath + '/' + testsPath);
    fs.copyFileSync('./.tests/read-code.js', targetPath + '/.tests/read-code.js');
    const testFiles = fs.readdirSync(targetPath + '/' + testsPath)
    console.log(testFiles)
    // const filePath = path.resolve(__dirname, `../../src.00-exemple/01-exemple.js`);
    await sh(`sed -ie 's/src.00-exemple/src/g'` + " " + targetPath + '/' + testsPath + "/" + testFiles[0])
    await rmRf(targetPath + '/' + testsPath + "/" + testFiles[0] + "e")
    fs.renameSync(`${targetPath}/src/README.md`, `${targetPath}/README.md`);
};


makeStudentRepo();
