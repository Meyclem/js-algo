/* eslint quotes: ["error", "backtick"] */
const { findVariableInCode } = require(`./read-code`);
const path = require(`path`);

describe(`Les variables`, () => {
    const filePath = path.resolve(__dirname, `../src/00-les-bases/00-variables.js`);

    test(`Définir une variable constante 'promo' avec la valeur "Zagreus"`, async () => {
        const {value, keyword} = await findVariableInCode(`promo`, filePath);

        expect(keyword).toBe(`const`);
        expect(value).toBe(`Zagreus`);
    });

    test(`Définir une variable constante 'firstname' avec le string 'John'`, async () => {
        const {value, keyword} = await findVariableInCode(`firstname`, filePath);

        expect(keyword).toBe(`const`);
        expect(value).toBe(`John`);
    });

    test(`Définir une variable modifiable 'age' avec le chiffre '42'`, async () => {
        const {value, keyword} = await findVariableInCode(`age`, filePath);

        expect(keyword).toBe(`let`);
        expect(value).toBe(42);
    });

    test(`Définir une variable constante 'oneMoreYear' avec le chiffre '1'`, async () => {
        const {value, keyword} = await findVariableInCode(`oneMoreYear`, filePath);

        expect(keyword).toBe(`const`);
        expect(value).toBe(1);
    });
    
    test(`Définir une variable modifiable 'happyBirthsday' avec la l'addition de age et oneMoreYear`, async () => {
        const {value, keyword} = await findVariableInCode(`happyBirthsday`, filePath);
    
        expect(keyword).toBe(`let`);
        expect(value).toBe(43);
    });

    test(`Changer la valeur de 'age' change la valeur de 'happyBirthsday'`, async () => {
        const { value } = await findVariableInCode(`happyBirthsday`, filePath, {
            regex: /(let|const)(\s*?)age(\s*?)=(\s*?)([0-9]{2})(\s*?);/,
            string: `const age = 1;`
        });
    
        expect(value).toBe(2);
    });

    test(`Définir une variable 'pets' contenant les strings 'Garfield', 'Félix', 'Rantaplan', 'Robert'`, async () => {
        const {value, keyword} = await findVariableInCode(`pets`, filePath);

        expect(keyword).toBe(`const`);
        expect(Array.isArray(value)).toBe(true);
        expect(value).toEqual([`Garfield`, `Félix`, `Rantaplan`, `Robert`]);
    });

    test(`Définir la variable 'jon' avec les bonnes propriétés`, async () => {
        const {value: jon, keyword} = await findVariableInCode(`jon`, filePath);

        expect(keyword).toBe(`const`);
        expect(typeof jon).toBe(`object`);
        expect(jon.firstname).toBe(`John`);
        expect(jon.age).toBe(42);
    });

    test(`Changer la valeur de 'age' change l'age de John`, async () => {
        const { value: jon } = await findVariableInCode(`jon`, filePath, {
            regex: /(let|const)(\s*?)age(\s*?)=(\s*?)([0-9]{2})(\s*?);/,
            string: `const age = 1;`
        });
    
        expect(jon.age).toBe(1);
    });
});
