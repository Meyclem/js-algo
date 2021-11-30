/* ⚠️Ne pas toucher⚠️ *//* eslint no-unused-vars: 0 */

/**
 * TODO: Écris ton code en dessous de chaque commentaire 👇
 */

// Définir une variable constante nommée promo et lui attributer la valeur "Zagreus"
const promo = 'Zagreus';

// Définir une variable constante 'firstname' avec la valeur 'John'
const firstname = 'John';

// Définir une variable modifiable 'age' avec le chiffre '42'
let age = 42;

// Définir une variable constante 'oneMoreYear' avec le chiffre '1'
const oneMoreYear = 1;

// Définir une variable modifiable 'happyBirthday' avec la l'addition de age et oneMoreYear
let happyBirthday = age + oneMoreYear;

// Définir une variable 'pets' contenant les strings 'Garfield', 'Félix', 'Rantaplan', 'Robert'
const pets = ['Garfield', 'Félix', 'Rantaplan', 'Robert'];

// Définir une variable constante 'garfield' avec la valeur du 1er élément de 'pets'
const garfield = pets[0];

// Définir une variable constante 'lastPet' avec la valeur du dernier élément de 'pets'
const lastPet = pets[pets.length - 1];

/**
 * Définir une variable const 'allPets' à partir de 'pets' qui doit avoir la valeur
 * des élemnts du tableau, séparés, par ', ': exemple "tata, toto, ..."
 * 📚 Documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */

const allPets = pets.join(', ');

/**
 * Définir une variable constante 'jon' avec:
 * - une propriété 'firstname' et la valeur de la variable firstname
 * - une propriété 'age' et la valeur de la variable age
 */
const jon = { firstname, age };
