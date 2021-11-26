const path = require('path');
const readCode = require('./read-code');

describe('Les variables', () => {
    let studentCode;

    beforeAll(() => {
        studentCode = readCode(
            path.resolve(__dirname, '..//01-les-bases/01-variables.js')
        );
        return studentCode;
    });

    test('Définir une variable \'firstname\' avec la valeur `"John"`', () => {
        return studentCode.then((code) => {
            const question = eval(code + '; firstname;');
        
            expect(question).toBe('John');
        });
    });

    test('Définir une variable \'age\' avec la valeur \'42\'', () => {
        return studentCode.then((code) => {
            const question = eval(code + '; age;');
        
            expect(question).toBe(42);
        });
    });
});
