/* eslint quotes: ["error", "backtick"] */
const { findInCode, readCode } = require(`./read-code`);
const path = require(`path`);

describe(`#findName`, () => {
    const filePath = path.resolve(__dirname, `../src/02-find-name.js`);
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
    
    test(`'Array.Prototype.find()' et 'Array.Prototype.includes()' ne sont pas utilisés`, async () => {
        const code = await readCode(filePath);

        // 🤖 ne pas utiliser '.find' ou '.includes' sur 'firstNames', c'est de la triche!
        expect(code).not.toMatch(/\.find\(/g);
        expect(code).not.toMatch(/\.includes\(/g);
    });
});
