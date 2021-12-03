/* ⚠️Ne pas toucher⚠️ *//* eslint no-unused-vars: 0 */

/**
 * TODO: Écris ton code en dessous de chaque commentaire 👇
 */

/**
 * Définis une fonction 'reduceArray', elle doit:
 * - prendre un tableau en paramètre
 * 
 * - renvoyer une valeur qui est le cumul des éléments du tableau (strings ou numbers)
 *   💡 dans les tests on enverra soit QUE des nombres soit QUE des strings.
 * 
 * - ne pas utiliser 'Array.Prototype.reduce(Array)'
 *    - si tu sais pas ce que c'est, c'est pas grave, on verra ça plus tard 😉
 *    - si tu sais ce que c'est, triche pas! 😁
 */

/**
 * @param {Array<string|number>} values 
 * @param {unknown[]} secondArray 
 */
const reduceArray = (values) => {
    let result = typeof values[0] === 'number' ? 0 : '';

    for (const value of values) {
        result += value;
    }

    return result;
};

// exemple de code utilisant la fonction:
// const addition = reduceArray([2, 4, 5]);
// console.log(addition); // devrait imprimer 11
// const concatenation = reduceArray(['pl', 'ouf']);
// console.log(concatenation); // devrait imprimer 'plouf'
