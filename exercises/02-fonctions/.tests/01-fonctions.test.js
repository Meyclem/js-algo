/* eslint quotes: ["error", "backtick"] */
const { findInCode } = require(`./read-code`);
const path = require(`path`);

describe(`Les fonctions`, () => {
    let fakeConsoleLog = jest.spyOn(console, `log`).mockImplementation((string) => logs += `${string}`);
    const filePath = path.resolve(__dirname, `../src/01-fonctions.js`);
    let logs = ``;
    
    beforeEach(() => {
        fakeConsoleLog = jest.spyOn(console, `log`).mockImplementation((string) => logs += `${string}`);
    });
  
    afterEach(() => {
        logs = ``;
        fakeConsoleLog.mockRestore();
    });

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

            expect(logs).toMatch(`Hello World!`);
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

            expect(logs).toMatch(`Hello Ellie!`);
        });
    });

    describe(`#isEven`, () => {
        let isEven;
        beforeAll(async () => {
            await findInCode(`isEven`, filePath).then(({value}) => isEven = value);
        });

        test(`Définir une fonction 'isEven' qui prend un chiffre en paramètre`, async () => {
            const parametersCount = isEven.length;
            expect(parametersCount).toEqual(1);
        });

        test(`Retourne 'true' si le chiffre est pair`, async () => {
            expect(isEven(2)).toBe(true);
            expect(isEven(42)).toBe(true);
            expect(isEven(1000)).toBe(true);
            expect(isEven(2322)).toBe(true);
        });

        test(`Retourne 'false' si le chiffre est impair`, async () => {
            expect(isEven(3)).toBe(false);
            expect(isEven(43)).toBe(false);
            expect(isEven(10001)).toBe(false);
            expect(isEven(23221)).toBe(false);
        });
    });

    describe(`#canIDrive`, () => {
        let canIDrive;

        beforeAll(async () => {
            await findInCode(`canIDrive`, filePath).then(({value}) => canIDrive = value);
        });

        test(`Définir une fonction 'canIDrive' qui prend un 'age' en paramètre`, async () => {
            const parametersCount = canIDrive.length;
            expect(parametersCount).toEqual(1);
        });

        test(`Retourne 'true' si l'âge est supérieur ou égal à 18`, async () => {
            expect(canIDrive(18)).toBe(true);
            expect(canIDrive(99)).toBe(true);
        });

        test(`Retourne 'false' si l'âge est inférieur à 18`, async () => {
            expect(canIDrive(17)).toBe(false);
        });
    });

    describe(`#capitalize`, () => {
        let capitalize;
        beforeAll(async () => {
            await findInCode(`capitalize`, filePath).then(({value}) => capitalize = value);
        });

        test(`Définir une fonction 'capitalize' qui prend un paramètre`, async () => {
            const parametersCount = capitalize.length;
            expect(parametersCount).toEqual(1);
        });

        test(`Met en majuscule la première lettre du string passé en argument et le retourne`, async () => {
            expect(capitalize(`hello`)).toEqual(`Hello`);
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

        test(`Retourne l'addition si les arguments sont des nombres`, async () => {
            expect(add(1, 2)).toEqual(3);
            expect(add(-4 , 2)).toEqual(-2);
        });

        test(`Retourne 'NaN' si au moins l'un des arguments n'est pas un nombre`, async () => {
            expect(add(false, `plouf`)).toBe(NaN);
            expect(add(NaN, 1)).toBe(NaN);
            expect(add(`pas un nombre`, [])).toBe(NaN);
        });
    });
    
    describe(`#repeat`, () => {
        let repeat;
        beforeAll(async () => {
            await findInCode(`repeat`, filePath).then(({value}) => repeat = value);
        });


        test(`Définir une fonction 'repeat' qui prend deux paramètres`, async () => {
            const parametersCount = repeat.length;
            expect(parametersCount).toEqual(2);
        });

        test(`repeat doit utiliser console.log autant de fois que le chiffre indiqué en paramètre`, () => {
            repeat(`Hello`, 3);
            
            expect(logs).toMatch(/(Hello){3}/);
            expect(fakeConsoleLog).toHaveBeenCalledTimes(3);
        });
    });

    describe(`#getRandomNumber`, () => {        
        let getRandomNumber;
        let fakeMathRandom;

        beforeAll(async () => {
            await findInCode(`getRandomNumber`, filePath).then(({value}) => getRandomNumber = value);
        });

        beforeEach(() => fakeMathRandom = jest.spyOn(Math, `random`));

        afterEach(() => fakeMathRandom.mockRestore());

        test(`Définir une fonction 'getRandomNumber' qui prend deux paramètres, 'min' et 'max'`, async () => {
            const parametersCount = getRandomNumber.length;
            expect(parametersCount).toEqual(2);
        });

        test(`Utilise 'Math.random'`, () => {
            getRandomNumber(1, 6);

            expect(Math.random).toHaveBeenCalledTimes(1);
        });

        test(`Retourne un nombre alétoire compris entre min et max`, async () => {
            fakeMathRandom.mockReturnValue(0);

            expect(getRandomNumber(1, 6)).toBe(1);
            expect(getRandomNumber(2, 49)).toBe(2);

            fakeMathRandom.mockReturnValue(0.99999999999);

            expect(getRandomNumber(1, 666)).toBe(666);
            expect(getRandomNumber(2, 4999)).toBe(4999);
        });

        test(`Provoquer une erreur si 'min' est supérieur à 'max'`, async () => {
            expect.assertions(1);
            try {
                getRandomNumber(2, 1);
            } catch(error) {
                expect(error.message).toBe(`Must be 'min < max'`);
            }
        });
    });
});
