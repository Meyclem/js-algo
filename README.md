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

et ça va te sortir un truc comme ça:

```
FAIL  tests/00-variables.test.js
Les variables
  ✓ Définir une variable constante 'promo' avec la valeur "Zagreus" (22 ms)
  ✕ Définir une variable constante 'firstname' avec le string 'John' (2 ms)
  ✕ Définir une variable modifiable 'age' avec le chiffre '42' (1 ms)
  ✕ Définir une variable constante 'oneMoreYear' avec le chiffre '1' (1 ms)
  ✕ Définir une variable modifiable 'happyBirthsday' avec la l'addition de age et oneMoreYear (1 ms)
  ✕ Changer la valeur de 'age' change la valeur de 'happyBirthsday' (2 ms)
  ✕ Définir une variable 'pets' contenant les strings 'Garfield', 'Félix', 'Rantaplan', 'Robert' (2 ms)
  ✕ Définir la variable 'jon' avec les bonnes propriétés (1 ms)
  ✕ Changer la valeur de 'age' change l'age de John (1 ms)
```
