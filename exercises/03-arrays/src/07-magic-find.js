/* ⚠️Ne pas toucher⚠️ *//* eslint no-unused-vars: 0 */

/**
 * TODO: Écris ton code en dessous de chaque commentaire 👇
 */

/**
 * Définis une fonction 'findWithFunction', elle doit:
 * - prendre deux paramètres:
 *    - 'firstNames': un array de prénoms, par ex: ["Louis", "Hélène", "henriette"]
 *    - 'name': une lettre, par ex: "A", "l", etc...
 * 
 * - renvoyer  uniquement le PREMIER prénom correspondant à celui passé en argument s'il est présent
 *   (💡 attention aux majuscules)
 * 
 * - renvoyer **undefined** si le prénom n'est pas dans le tableau.
 * 
 * - Utiliser 'Array.Prototype.find()', lien vers la doc dans le README.md
 */


/**
 * 
 * @param {Array<string>} firstNames 
 * @param {string} nameToFind 
 */
const findName = (firstNames, nameToFind) => firstNames
    .find((name) => name.toLowerCase() === nameToFind.toLowerCase());

// exemple de code utilisant la fonction:
// const firstNames = ['Rick', 'shane', 'Shane', 'SHANE'];
// const shane = filterNames(firstNames, 'SHANE');
// console.log(shane);
