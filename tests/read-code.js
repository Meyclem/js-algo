const fs = require('fs');

module.exports = function (path) {
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
};

