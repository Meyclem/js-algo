/* eslint quotes: ["error", "backtick"] */
const { findInCode, readCode } = require(`./read-code`);
const path = require(`path`);

describe(`#flattenArrays`, () => {
    const filePath = path.resolve(__dirname, `../src/09-magic-flatten.js`);
    let flattenArrays;

    beforeAll(async () => {
        await findInCode(`flattenArrays`, filePath).then(({value}) => {
            flattenArrays = value;
        });
    });
    
    test(`Définir une function 'flattenArrays' qui prend deux arguments`, () => {
        expect(typeof flattenArrays).toBe(`function`);
        const argumentCount = flattenArrays.length;

        // 🤖 La fonction doit avoir deux paramètres
        expect(argumentCount).toBe(2);
    });

    test(`'Array.Prototype.concat()' est utilisé`, async () => {
        const code = await readCode(filePath);

        // 🤖 Utiliser '.concat' sur firstArray.
        expect(code).toMatch(/\.concat\(/g);
    });

    test(`Renvoie un tableau`, () => {
        // 🤖 La fonction doit renvoyer un array
        expect(Array.isArray(flattenArrays([], []))).toBe(true);
    });

    test(`Renvoie les deux tableaux fusionnés en un seul`, () => {
        expect(flattenArrays([1], [2])).toEqual([1, 2]);
        expect(flattenArrays([`1`, false], [`hello`])).toEqual([`1`, false, `hello`]);
        expect(flattenArrays([NaN, [1, 2]], [3])).toEqual([NaN, [1, 2], 3]);
    });
});
