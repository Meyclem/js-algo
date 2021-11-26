# Exercices Javascript

Dans ce repo tu trouveras une série d'exercices pour t'entraîner à pratiquer le JavaScript!

## Setup

Avant de commencer à coder, quelques ptites choses!
Il va falloir lancer quelques commandes, que nous expliquerons plus en détail dans les prochains jours, un peu de patience! 😉

Tout, d'abord, il faut cloner ce repo! Ensuite, va dans le dossier et lance ça dans ton terminal:

```bash
yarn install
```

## Ils sont où les exercices?

### Là regarde!

Ils sont dans le dossier `src`! Dedans tu les trouveras rangés par ordre de progression. Evidemment, on commence à ~~1~~ `00` parce qu'on est des devs 😏

C'est parti! Regarde dans le fichier `src/00-les-bases/00-variables.js`.

Il y a des instructions en commentaires, par exemple:

```js
// Définir une variable modifiable nommée promo et lui attributer la valeur "Zagreus"
```

Il faut donc ajouter ta définition de variable. Attention, **prends bien le temps** de lire les consignes à chaque fois, elles contiennent des indications 😉

Allez, la première c'est 🎁:

```js
// Définir une variable modifiable nommée promo et lui attributer la valeur "Zagreus"
const promo = 'Zagreus';
```

### Et pour savoir si c'est bon?

On a prévu quelques tests pour toi. Pour voir ça, lance ça dans ton terminal:

```bash
jest 00-variables
```
> c'est pour dire "test le fichier 00-variables"

et ça va te sortir plein de trucs 😱

T'inquiètes, on va voir ça ensemble.

```
FAIL  tests/00-variables.test.js
Les variables
  ✓ Définir une variable constante 'promo' avec la valeur "Zagreus"
  ✕ Définir une variable constante 'firstname' avec le string 'John'
  ...
```
> Ici, le premier test est réussi, tu le vois avec "✓"
> Le deuxième est pas passé: "✕"

D'ailleurs, on a plus de détail si on regarde bien:

```
● Les variables › Définir une variable constante 'firstname' avec le string 'John'

  ReferenceError: firstname is not defined
  ...
```
> Dans le fichier des variables, la partie **Définir une variable constante 'firstname' avec le string 'John'** est pas passé parce qu'on y a pas trouvé de variable `firstname`, c'est le message d'erreur qui le dit:
> 🤖 `ReferenceError: firstname is not defined`

Et enfin, en bas, on a le récap:

```bash
Test Suites: 1 failed, 1 total
# T'as pas encore tout réussi pour les variables
Tests:       8 failed, 1 passed, 9 total
# Sur un total de 8 tests, on en a réussi 1!
```

💪 Allez, on fait la suite? 💪