/* ⚠️Ne pas toucher⚠️ *//* eslint no-unused-vars: 0 */

/**
 * TODO: Écris ton code en dessous de chaque commentaire 👇
 */

/**
 * Définis une fonction 'filterNames', elle doit:
 * - prendre deux paramètres:
 *    - 'firstNames': un array de prénoms, par ex: ["Louis", "Hélène", "henriette"]
 *    - 'letter': une lettre, par ex: "A", "l", etc...
 * - renvoyer **un nouveau tableau** contenant uniquement les prénoms commençant par la lettre passée en argument.
 *   (💡 attention aux majuscules)
 * - ne pas utiliser 'Array.Prototype.filter()'
 *    - si tu sais pas ce que c'est, c'est pas grave, on verra ça plus tard 😉
 *    - si tu sais ce que c'est, triche pas! 😁
 */


/**
 * 
 * @param {Array<string>} firstNames 
 * @param {string} letter 
 */
function filterNames(firstNames, letter) {
    const filteredNames = [];
    
    for (const firstName of firstNames) {
        if (firstName.toLowerCase().startsWith(letter.toLowerCase())) {
            filteredNames.push(firstName);
        }
    }

    return filteredNames;
}

// exemple de code utilisant la fonction:
// const firstNames = ['Alix', 'Aloy', 'peach'];
// const namesStartingWithA = filterNames(firstNames, 'a');
// console.log(namesStartingWithA);
