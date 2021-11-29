const { parse, visit } = require('recast');
const fs = require('fs');

/**
 * This function will return an object with the keyword used to declare the variable or function
 * and will also return its value.
 * @param {string} id - The name of the variable or function to look for in the code
 * @param {string} filePath - The path of the file to parse
 * @param {Object} codeReplacement - parameters for the code replacement with `String.Prototype.Replace()`
 * @param {RegExp} codeReplacement.regex - Regex used for the replacement in the code
 * @param {string} codeReplacement.string - Will be inserted in place of the regex match 
 * @returns {Promise<{ value: unknown, keyword: string }>} a `Promise` resolving to the value of the variable or function.
 */
const findInCode = async (id, filePath, codeReplacement = null) => {
    const code = await readCode(filePath).then(code =>  codeReplacement
        ? code.replace(codeReplacement.regex, codeReplacement.string)
        : code
    );
    const ast = parse(code);
    
    const declaration = {};
    
    visit(ast, {
        visitVariableDeclaration: function(node) {
            if (node.value.declarations[0].id.name === id) {
                declaration.keyword = node.value.kind;
                this.abort();
            } else {
                this.traverse(node);
            }
        },
        visitFunctionDeclaration: function(node) {
            
            if (node.value.id.name === id) {
                declaration.keyword = 'function';
                this.abort();
            } else {
                this.traverse(node);
            }
        }
    });
    
    declaration.value = eval(`${code}; ${id};`);
    
    return declaration;
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
    findInCode,
    readCode,
};
