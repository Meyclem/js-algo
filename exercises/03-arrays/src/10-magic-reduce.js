/* ⚠️Ne pas toucher⚠️ *//* eslint no-unused-vars: 0 */

/**
 * TODO: Écris ton code en dessous de chaque commentaire 👇
 */

/**
 * Définis une fonction 'reduceArray', elle doit:
 * - prendre un tableau en paramètre
 * 
 * - renvoyer une valeur qui est le cumul des éléments du tableau (strings ou numbers)
 * 
 * - Utiliser 'Array.Prototype.reduce(Array)'
 */

/**
 * @param {Array<string|number>} values 
 * @param {unknown[]} secondArray 
 */
const reduceArray = (values) => values.reduce((previous, current) => previous + current);

// exemple de code utilisant la fonction:
// const addition = reduceArray([2, 4, 5]);
// console.log(addition); // devrait imprimer 11
// const concatenation = reduceArray(['pl', 'ouf']);
// console.log(concatenation); // devrait imprimer 'plouf'
