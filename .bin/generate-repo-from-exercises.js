import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
async function sh(cmd) {
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

async function rmRf(target) {
    const cmd = 'rm -rf ' + target;

    try {
        await sh(cmd);
    } catch(error) {
        if (error.message.match(/Error: ENOENT: no such file or directory/)) {
            console.log(`🔥 no such file or directory: ${target}`);
        }
    }
}

async function initGitRepo(path) {
    await sh(`cd ${path} && git init`);
    await sh(`cd ${path} && git add .`);
    await sh(`cd ${path} && git commit -m "autogenerate repo"`);
}

async function generateExercisesRepositories(exercisesNames = []) {
    const __dirname = path.resolve(path.dirname('../')) + '/';
    const exercisesDir = __dirname + 'exercises/';
    const repoNames =  fs.readdirSync(exercisesDir);
    let exercisesToGenerate = repoNames;

    if (exercisesNames.length > 0) {
        if (exercisesNames.every(e => repoNames.includes(e))) {
            exercisesToGenerate = exercisesNames;
        } else {
            throw new Error('Unknown exercise(s) name(s)');
        }
    }

    const targetPath = __dirname.replace('js-algo-exercises/', '');

    const generatedExercises = [];

    for await (const exercise of exercisesToGenerate) {
        const exercisePath = exercisesDir + exercise;
        const newRepoPath = `${targetPath}js-algo-${exercise}`;
        await rmRf(`${newRepoPath}/` );
        await sh(`cp -r ${exercisePath} ${newRepoPath}`);
        await sh(`cp ${__dirname}/.gitignore ${newRepoPath}/.gitignore`);
        await rmRf(`${newRepoPath}/src` );
        await sh(`mv ${newRepoPath}/src.student ${newRepoPath}/src`);
        await initGitRepo(newRepoPath);
        generatedExercises.push(newRepoPath);
    }

    return ['',...generatedExercises];
}

generateExercisesRepositories(process.argv.slice(2))
    .then((generatedExercises) => {
        console.log('✅ Exercises sucessfully generated');
        console.log(generatedExercises.join('\n📁 '));
    })
    .catch((error) => console.log('💥 ' + error.message));
