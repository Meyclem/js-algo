/* eslint quotes: ["error", "backtick"] */
const { findInCode } = require(`./read-code`);
const path = require(`path`);

describe(`Les fonctions`, () => {
    let fakeConsoleLog;
    const filePath = path.resolve(__dirname, `../src/00-les-bases/01-fonctions.js`);
    let logs;
    
    beforeEach(() => {
        logs = ``;
        fakeConsoleLog = jest.spyOn(console, `log`).mockImplementation((string) => logs += string);
    });
  
    afterEach(() => fakeConsoleLog.mockRestore());

    describe(`#sayHello`, () => {
        let sayHello;
        beforeAll(async () => {
            await findInCode(`sayHello`, filePath).then(({value}) => sayHello = value);
        });


        test(`Définir une fonction 'sayHello'`, async () => {
            expect(sayHello).toBeDefined();
        });

        test(`'sayHello()' doit imprimer 'Hello World!' dans la console`, async () => {
            sayHello();

            expect(logs).toEqual(`Hello World!`);
        });
    });

    describe(`#greetings`, () => {
        let greetings;
        beforeAll(async () => {
            await findInCode(`greetings`, filePath).then(({value}) => greetings = value);
        });


        test(`Définir une fonction 'greetings' avec un 'firstname' en paramètre`, async () => {
            const parametersCount = greetings.length;
            expect(parametersCount).toEqual(1);
        });

        test(`'greetings("Ellie")' doit imprimer 'Hello Ellie!' dans la console`, async () => {
            greetings(`Ellie`);

            expect(logs).toEqual(`Hello Ellie!`);
        });
    });
    
    describe(`#add`, () => {
        let add;
        beforeAll(async () => {
            await findInCode(`add`, filePath).then(({value}) => add = value);
        });


        test(`Définir une fonction 'add' qui prend deux paramètres`, async () => {
            const parametersCount = add.length;
            expect(parametersCount).toEqual(2);
        });

        test(`'Doit renvoyer l'addition si les arguments sont des nombres`, async () => {
            expect(add(1, 2)).toEqual(3);
            expect(add(-4 , 2)).toEqual(-2);
        });

        test(`'Doit renvoyer 'NaN' si au moins l'un des arguments n'est pas un nombre`, async () => {
            expect(add(false, `plouf`)).toBe(NaN);
            expect(add(NaN, 1)).toBe(NaN);
            expect(add(`pas un nombre`, [])).toBe(NaN);
        });
    });
});
