const { parse, visit } = require('recast');
const fs = require('fs');

const findVariableInCode = async (id, filePath) => {
    const code = await readCode(filePath).then(code => code);

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

    return { value: eval(`${code}; ${id};`), keyword };
};

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
