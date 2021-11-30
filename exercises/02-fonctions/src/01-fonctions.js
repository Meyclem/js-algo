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
 * Définir une variable 'isEven', elle doit:
 * - prendre un chiffre en paramètre
 * - renvoyer 'true' si il est pair
 * - renvoyer 'false' si il est impair
 */
const isEven = (number) => number % 2 === 0;

/**
 * Définir une fonction 'canIDrive', elle doit:
 * - prendre un paramètre 'age'
 * - renvoyer 'true' si 'age' est supérieur ou égal à 18
 * - renvoyer 'false' si 'age' est inférieur à 18
 */
function canIDrive (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

/** Définir une fonction 'capitalize' qui met en majuscule la première lettre du string en paramètre */
const capitalize = (word) => word[0].toUpperCase() + word.substring(1);

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

/**
 * Définir une fonction 'repeat', elle doit:
 * - prendre deux paramètres, un string et un chiffre
 * - afficher le string dans la console autant de fois le chiffre passé en argument
 * ex: repeat("Je suis concole.logué 3 fois", 3)
 */

function repeat(string, x) {
    for (let i = 1; i <= x; i++) {
        console.log(string);
    }
}

/**
 * Définir une fonction 'getRandomNumber', elle doit:
 * - prendre deux paramètres, 'min' et 'max'
 * - retourner un nombre aléatoire compris entre min et max
 * - provoquer une erreur si 'min > max'
 * Documentation: 📚 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Error
 */

function getRandomNumber(min, max) {
    if (min > max) throw new Error('Must be \'min < max\'');
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
