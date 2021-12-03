/* eslint quotes: ["error", "backtick"] */
const { findInCode, readCode } = require(`./read-code`);
const path = require(`path`);

describe(`#filterNames with '.filter'`, () => {
    const filePath = path.resolve(__dirname, `../src/06-magic-filter.js`);
    let filterNames;

    beforeAll(async () => {
        await findInCode(`filterNames`, filePath).then(({value}) => {
            filterNames = value;
        });
    });

    test(`Définir une function 'filterNames' qui prend deux arguments`, () => {
        expect(typeof filterNames).toBe(`function`);
        const argumentsCount = filterNames.length;

        // 🤖 attend que ta fonction prenne deux arguments
        expect(argumentsCount).toBe(2);
    });


    test(`'Array.Prototype.filter()' est utilisé`, async () => {
        const code = await readCode(filePath);

        // 🤖 Il faut utiliser '.filter' sur 'firstNames'
        expect(code).toMatch(/\.filter\(/g);
    });

    test(`Renvoie un tableau vide si rien de correspond`, () => {
        const names = [`Louis`, `Hélène`];

        expect(filterNames(names, `Z`)).toEqual([]);
    });

    test(`Renvoie les prénoms correspondants à la lettre donnée`, () => {
        const names = [`Louis`, `Hélène`];

        // 🤖 on attend 'Louis' qui comment par `L`
        expect(filterNames(names, `L`)).toEqual([`Louis`]);
    });

    test(`Renvoie les prénoms correspondants à la lettre donnée sans la casse`, () => {
        const names = [`Louis`, `Hélène`, `laurent`];

        // 🤖 on attend 'Louis' qui comment par `L`
        expect(filterNames(names, `L`)).toEqual([`Louis`, `laurent`]);
    });
});
