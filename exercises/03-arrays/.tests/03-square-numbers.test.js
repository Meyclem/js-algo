/* eslint quotes: ["error", "backtick"] */
const { findInCode, readCode } = require(`./read-code`);
const path = require(`path`);

describe(`#squareNumbers`, () => {
    const filePath = path.resolve(__dirname, `../src/03-square-numbers.js`);
    let squareNumbers;

    beforeAll(async () => {
        await findInCode(`squareNumbers`, filePath).then(({value}) => {
            squareNumbers = value;
        });
    });
    
    test(`Définir une function 'squareNumbers' qui prend un argument`, () => {
        expect(typeof squareNumbers).toBe(`function`);
        const argumentCount = squareNumbers.length;

        // 🤖 La fonction doit avoir un seul paramètre
        expect(argumentCount).toBe(1);
    });

    test(`Renvoie un tableau`, () => {
        // 🤖 La fonction doit renvoyer un array
        expect(squareNumbers([1])).toBeDefined();
        expect(Array.isArray(squareNumbers([1]))).toBe(true);
    });

    test(`Renvoie un tableau de nombres`, () => {
        const numbers = [2, 4, 5];
        expect.assertions = numbers.length;
        const results = squareNumbers(numbers);

        // 🤖 La fonction doit renvoyer un tableau de number
        expect(Array.isArray(results)).toBe(true);

        results.forEach((result) => {
            // 🤖 Au moins un des éléments tu tableau n'est pas un number
            expect(typeof result).toBe(`number`);
        });
    });

    test(`Renvoie un tableau avec les nombres au carré`, () => {
        expect(squareNumbers([2, 4, 5])).toEqual([4, 16, 25]);
        expect(squareNumbers([3, 387, 1024])).toEqual([9, 149769, 1048576]);
        expect(squareNumbers([-2, 30, 21])).toEqual([4, 900, 441]);
    });

    test(`'Array.Prototype.map()' n'est pas utilisé`, async () => {
        const code = await readCode(filePath);

        // 🤖 ne pas utiliser '.map' sur 'numbers' dans la fonction, c'est de la triche!
        expect(code).not.toMatch(/\.map\(/g);
    });
});
