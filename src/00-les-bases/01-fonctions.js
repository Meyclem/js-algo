/* ⚠️Ne pas toucher⚠️ *//* eslint no-unused-vars: 0 */

/**
 * TODO: Écris ton code en dessous de chaque commentaire 👇
 */

// Définir une fonction 'sayHello' qui affiche 'Hello World!' dans la console
function sayHello() {
    console.log('Hello World!');
}

/**
 * Définir une fonction 'greetings' qui doit prendre un prénom en paramètre:
 * ex: greetings("Justine")
 * Elle doit afficher 'Hello Justine!' dans la console.
 */
function greetings(firstname) {
    console.log('Hello ' + firstname + '!');
}

/**
 * Définir une fonction 'add', elle doit:
 * - prendre 2 paramètres
 * - renvoyer le résultat de l'addition si exécutée avec des nombres, ex: add(1, 2) => 3
 * - renvoyer 'NaN' si les arguments ne sont pas des nombres, ex: add(false, "plouf") => Nan
 */
const add = (a, b) => typeof a === 'number' && !isNaN(a) &&
    typeof b === 'number' && !isNaN(b)
    ? a + b
    : NaN;
