/* ⚠️Ne pas toucher⚠️ *//* eslint no-unused-vars: 0 */

/**
 * TODO: Écris ton code en dessous de chaque commentaire 👇
 */

/**
 * Définis une fonction 'squareNumbers', elle doit:
 * - prendre un tableau de nombres en paramètre
 * 
 * - renvoyer un tableau dans lequel chaque chiffre sera mis au carré (multiplié par lui-même)
 * 
 * - le tout avec une boucle ('for' ou 'forEach')
 * 
 * - Utiliser 'Array.Prototype.map()'
 */

/**
 * @param {Array<numbers>} numbers
 */
const squareNumbers = (numbers)  => numbers.map((n) => n * n);

// exemple de code utilisant la fonction:
// const results = squareNumbers([2, 4, 5]);
// console.log(results); // devrait imprimer [4, 16, 25]
