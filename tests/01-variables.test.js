const { findVariableInCode } = require('./read-code');
const path = require('path');

describe('Les variables', () => {
    const filePath = path.resolve(__dirname, '../01-les-bases/01-variables.js');

    test('Définir une variable constante \'firstname\' avec la valeur `"John"`', async () => {
        const {value, keyword} = await findVariableInCode('firstname', filePath);

        expect(keyword).toBe('const');
        expect(value).toBe('John');
    });

    test('Définir une variable modifiable \'age\' avec la valeur \'42\'', async () => {
        const {value, keyword} = await findVariableInCode('age', filePath);

        expect(keyword).toBe('let');
        expect(value).toBe(42);
    });

    test('Définir une variable constante \'promo\' avec la valeur \'"Zagreus"\'', async () => {
        const {value, keyword} = await findVariableInCode('promo', filePath);

        expect(keyword).toBe('const');
        expect(value).toBe('Zagreus');
    });

    test('Définir une variable \'pets\' avec la valeur \'Félix\', \'Rantaplan\', \'Robert\'', async () => {
        const {value, keyword} = await findVariableInCode('pets', filePath);

        expect(keyword).toBe('const');
        expect(value).toEqual(['Garfield', 'Félix', 'Rantaplan', 'Robert']);
    });
});
