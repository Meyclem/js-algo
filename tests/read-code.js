const { parse, visit } = require('recast');
const fs = require('fs');

/**
 * This function will return an object with the keyword used to declare the variable
 * and will also return its value.
 * @param {string} id - The name of the variable to look for in the code
 * @param {string} filePath - The path of the file to parse
 * @param {Object} codeReplacement - parameters for the code replacement with `String.Prototype.Replace()`
 * @param {RegExp} codeReplacement.regex - Regex used for the replacement in the code
 * @param {string} codeReplacement.string - Will be inserted in place of the regex match 
 * @returns {Promise<{ value: unknown, keyword: string }>} a `Promise` resolving to the value of the variable
 */
const findVariableInCode = async (id, filePath, codeReplacement = null) => {
    const code = await readCode(filePath).then(code =>  codeReplacement
        ? code.replace(codeReplacement.regex, codeReplacement.string)
        : code
    );
    const ast = parse(code);
    let keyword;
    
    visit(ast, {
        visitVariableDeclaration: function(node) {
            if (node.value.declarations[0].id.name === id) {
                keyword = node.value.kind;
                this.abort();
            } else {
                this.traverse(node);
            }
        }
    });

    return {
        keyword,
        value: eval(`${code}; ${id};`),
    };
};

/**
 * This `async` function reads a file and removes comments (in javascript files only).
 * @param {string} path - the path of the file to parse
 * @returns {Promise<string>} `Promise` resolving to the content of the file without JS comments
 */
function readCode(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf8', function (err, text) {
            if (err) {
                reject(err);
                return;
            }
            const studentCode = text
                .replace(/\/\*([^]*?)\*\//gm, '')
                .replace(/\/\/[^]*?\n/g, '')
                .trim();

            if (studentCode.length) {
                resolve(studentCode);
            } else {
                reject('File does not contain any code');
            }
        });
    });
}

module.exports = {
    findVariableInCode,
    readCode,
};
