/* eslint quotes: ["error", "backtick"] */
const { findInCode, readCode } = require(`./read-code`);
const path = require(`path`);

describe(`#filterNames`, () => {
    const filePath = path.resolve(__dirname, `../src/01-filter-names.js`);
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

    test(`'Array.Prototype.filter()' n'est pas utilisé`, async () => {
        const code = await readCode(filePath);

        // 🤖 ne pas utiliser '.filter' sur 'firstNames', c'est de la triche!
        expect(code).not.toMatch(/\.filter\(/g);
    });
});
