/* ⚠️Ne pas toucher⚠️ *//* eslint no-unused-vars: 0 */

/**
 * TODO: Écris ton code en dessous de chaque commentaire 👇
 */

/**
 * Définis une fonction 'flattenArrays', elle doit:
 * - prendre deux tableaux en paramètres, 'firstArray' et 'secondArray'
 * 
 * - renvoyer UN SEUL tableau contenant toutes les valeurs des deux autres
 * 
 * - ne pas utiliser 'Array.Prototype.concat(Array)'
 *    - si tu sais pas ce que c'est, c'est pas grave, on verra ça plus tard 😉
 *    - si tu sais ce que c'est, triche pas! 😁
 */

/**
 * @param {unknown[]} firstArray 
 * @param {unknown[]} secondArray 
 */
const flattenArrays = (firstArray, secondArray) => [...firstArray, ...secondArray];

// exemple de code utilisant la fonction:
// const results = squareNumbers([2, 4, 5]);
// console.log(results); // devrait imprimer [4, 16, 25]
