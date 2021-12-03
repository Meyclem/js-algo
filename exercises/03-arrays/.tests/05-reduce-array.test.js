/* eslint quotes: ["error", "backtick"] */
const { findInCode, readCode } = require(`./read-code`);
const path = require(`path`);

describe(`#reduceArray`, () => {
    const filePath = path.resolve(__dirname, `../src/05-reduce-array.js`);
    let reduceArray;

    beforeAll(async () => {
        await findInCode(`reduceArray`, filePath).then(({value}) => {
            reduceArray = value;
        });
    });
    
    test(`Définir une function 'reduceArray' qui prend un argument`, () => {
        expect(typeof reduceArray).toBe(`function`);
        const argumentCount = reduceArray.length;

        // 🤖 La fonction doit avoir un seul paramètre
        expect(argumentCount).toBe(1);
    });

    test(`Renvoie un number si un tableau de nombres est passé en argument`, () => {
        // 🤖 La fonction doit renvoyer un number
        expect(typeof reduceArray([1, 2])).toBe(`number`);
    });

    test(`Renvoie la valeur cumulée des nombres du tableau`, () => {
        // 🤖 Il faut fait l'addition!
        expect(reduceArray([1, 2, 3])).toBe(6);
        expect(reduceArray([-1, 1])).toBe(0);
    });

    
    test(`Renvoie un string si un tableau de strings est passé en argument`, () => {
        // 🤖 La fonction doit renvoyer un number
        expect(typeof reduceArray([``])).toBe(`string`);
    });

    test(`Renvoie la valeur cumulée des strings du tableau`, () => {
        // 🤖 Il faut fait l'addition!
        expect(reduceArray([`h`, `e`, `l`, `l`, `o`])).toBe(`hello`);
        expect(reduceArray([`w`, `o`, `r`, `l`, `d`])).toBe(`world`);
    });

    test(`'Array.Prototype.reduce()' et 'Array.Prototype.join()' ne sont pas utilisés`, async () => {
        const code = await readCode(filePath);

        // 🤖 Utiliser '.reduce' ou '.join' sur l'array c'est de la triche!
        expect(code).not.toMatch(/\.reduce\(/g);
        expect(code).not.toMatch(/\.join\(/g);
    });
});
