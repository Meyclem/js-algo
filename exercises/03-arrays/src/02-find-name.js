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
 * 
 * - renvoyer **undefined** si le prénom n'est pas dans le tableau.
 * 
 * - le tout avec une boucle ('for' ou 'forEach')
 * 
 *   (💡 attention aux majuscules)
 * 
 * - ne pas utiliser 'Array.Prototype.find()'
 *    - si tu sais pas ce que c'est, c'est pas grave, on verra ça plus tard 😉
 *    - si tu sais ce que c'est, triche pas! 😁
 */


/**
 * 
 * @param {Array<string>} firstNames 
 * @param {string} nameToFind 
 */
function findName(firstNames, nameToFind) {
    let searchedName;

    for (const firstName of firstNames) {
        if (firstName.toLowerCase() === nameToFind.toLowerCase()) {
            searchedName = firstName;
            break;
        }
    }

    return searchedName;
}

// exemple de code utilisant la fonction:
// const firstNames = ['Rick', 'shane', 'Shane', 'SHANE'];
// const shane = filterNames(firstNames, 'SHANE');
// console.log(shane);
