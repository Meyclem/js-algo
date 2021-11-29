/* eslint quotes: ["error", "backtick"] */
const { findInCode, readCode } = require(`./read-code`);
const path = require(`path`);

describe(`Exempes de TDD`, () => {
    let fakeConsoleLog = jest.spyOn(console, `log`).mockImplementation((string) => logs += `${string}`);
    let fakeMathRandom;
    const filePath = path.resolve(__dirname, `../src/000-exemple.js`);
    let logs = ``;
    
    beforeEach(() => {
        fakeConsoleLog = jest.spyOn(console, `log`).mockImplementation((string) => logs += `${string}`);
        fakeMathRandom = jest.spyOn(Math, `random`);
    });
  
    afterEach(() => {
        logs = ``;
        fakeConsoleLog.mockRestore();
        fakeMathRandom.mockRestore();
    });


    test(`Définir une variable constante 'promo' avec la valeur "Zagreus"`, async () => {
        const {value: promo, keyword} = await findInCode(`promo`, filePath);

        expect(keyword).toBe(`const`);
        expect(promo).toBe(`Zagreus`);
    });

    test(`Définir une variable modifiable 'myNumber' avec la valeur '1'`, async () => {
        const {value: myNumber, keyword} = await findInCode(`myNumber`, filePath);

        expect(keyword).toBe(`let`);
        expect(myNumber).toBe(1);
    });

    test(`Afficher "Hello World!" dans la console`, async () => {
        await readCode(filePath).then(code => eval(code));
        
        expect(logs).toMatch(`Hello World!`);
    });

    test(`Afficher un chiffre aléatoire entre 0 et 1 dans la console`, async () => {
        fakeMathRandom.mockReturnValue(0.5);
        await readCode(filePath).then(code => eval(code));

        expect(logs).toMatch(`0.5`);
    });
});
