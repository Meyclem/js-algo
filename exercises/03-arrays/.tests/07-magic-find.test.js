/* eslint quotes: ["error", "backtick"] */
const { findInCode, readCode } = require(`./read-code`);
const path = require(`path`);

describe(`#findName`, () => {
    const filePath = path.resolve(__dirname, `../src/07-magic-find.js`);
    let findName;

    beforeAll(async () => {
        await findInCode(`findName`, filePath).then(({value}) => {
            findName = value;
        });
    });
    
    test(`Définir une function 'findName' qui prend deux arguments`, () => {
        expect(typeof findName).toBe(`function`);
        const argumentCount = findName.length;

        // 🤖 attend que ta fonction prenne deux arguments
        expect(argumentCount).toBe(2);
    });

    test(`'Array.Prototype.find()' est utilisé`, async () => {
        const code = await readCode(filePath);

        // 🤖 Utiliser '.find' sur 'firstNames'
        expect(code).toMatch(/\.find\(/g);
    });

    test(`Renvoie 'undefined' si le prénom n'est pas présent dans l'array`, () => {
        expect(findName([`Joséphine`], `Ange-gardien`)).toBe(undefined);
    });

    test(`Renvoie le prénom correspondant s'il est présent dans l'array`, () => {
        expect(findName([`Louis`, `Hélène`], `Louis`)).toBe(`Louis`);
    });

    test(`Renvoie le prénom correspondant s'il est présent dans l'array (sans la casse)`, () => {
        // 🤖 Attention aux majuscules!
        expect(findName([`louis`, `Hélène`, `laurent`], `LOUIS`)).toBe(`louis`);
    });

    test(`Renvoie le PREMIER prénom correspondant`, () => {
        expect(findName([`Marie`, `MARIE`], `marie`)).toBe(`Marie`);
    });
});
