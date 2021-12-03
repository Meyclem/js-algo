# Exercices Javascript - Les arrays

Hey!

Dans cette série d'exercices tu vas avoir l'occasion de manipuler des arrays.

Il y en a 10 en tout! C'est beaucoup, alors ne rush pas, prends ton temps, laisse le ciboulot refroidir et surtout...

**⚠️⚠️ Prends bien le temps de lire TOUTES les consignes 😉 ⚠️⚠️**

## Setup

Avant de commencer à coder, quelques p'tites choses!
Il va falloir lancer quelques commandes, **que nous expliquerons** plus en détail dans les prochains jours, un peu de patience! 😉

Tout, d'abord, il faut cloner ce repo! Ensuite, va dans le dossier `js-algo-00-exemple` et **lance cette ligne de commande dans ton terminal**:

```bash
npm install
```
> On expliquera cette commande en détail d'ici quelques jours, en S03!

## Comment tester

⚠️ Dans le dossier il y a **plusieurs** fichiers, par exemple `01-filter-names.js`, `02-find-name.js` etc.

Pour lancer les tests:

```bash
npm test # lance TOUS les tests
npm test filter-names # lancera les tests UNIQUEMENT pour le 01-filter-names.js

npm test 01 ## ça fait pareil!
```
> Utiliser le nom du fichier permet de réduire la quantité d'infos affichées dans ton terminal 😉

par exemple avec `npm test filter-names` ou `npm test 01`:

```
PASS  .tests/01-filter-names.test.js
#filterNames
  ✓ Définir une function 'filterNames' qui prend deux arguments (2 ms)
  ✓ Renvoie les prénoms correspondants à la lettre donnée
  ✓ Renvoie les prénoms correspondants à la lettre donnée (sans la casse)
  ✓ 'Array.Prototype.filter()' n'est pas utilisé (1 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
```

Quand les tests ne passent pas, tu trouveras parfois **Nono** 🤖 qui te filera un p'tit indice, comme ici:

```
 ● #filterNames › Définir une function 'filterNames' qui prend deux arguments

    expect(received).toBe(expected) // Object.is equality

    Expected: 2
    Received: 0

      18 |
      19 |         // 🤖 attend que ta fonction prenne deux arguments
    > 20 |         expect(argumentsCount).toBe(2);
         |                                ^
      21 |     });
```
> comme ici 👉 `// 🤖 attend que ta fonction prenne deux arguments`!

## Les exercices

### La fonction `filterNames`

Dans le fichier [src/01-filter-names.js](./src/01-filter-names.js), tu dois coder une fonction nommée `filterNames` (wouhaaaaaa!).

💡🧐 Ici on va parler de **case insensitive**, c'est à dire, insensible à la casse, par exemple: `"GARFIELD"` et `"garfield"` ont les **mêmes caractères**, mais **dans des casses différentes** (minuscules et majuscules).

Les consignes sont dans le fichier, mais voici comment on voudrait l'utiliser:

```js
const firstNames = ['Alix', 'aloy', 'peach'];
const namesStartingWithA = filterNames(firstNames, 'a');
console.log(namesStartingWithA);
// doit imprimer: [ 'Alix', 'aloy' ]
```

L'idée, c'est de parcourir tout le tableau pour trouver les noms qui commencent par `'a'` ou `'A'`, en faire un nouveau tableau et de le renvoyer dans la fonction.

### La fonction `findName`

Dans le fichier [src/02-find-name.js](./src/02-find-name.js), tu dois coder une fonction nommée `findName`.

Les consignes sont dans le fichier, mais voici comment on voudrait l'utiliser:

```js
const firstNames = ['Rick', 'shane', 'Shane', 'SHANE'];
const shane = filterNames(firstNames, 'SHANE');
console.log(shane);
// doit imprimer: shane
```
> Oui! On veut seulement le premier en **case insensitive**

L'idée, c'est de parcourir tout le tableau pour trouver le **premier** nom qui correspond.

### La fonction `squareNumbers`

Dans le fichier [src/03-square-numbers.js](./src/03-square-numbers.js), tu dois coder une fonction nommée `squareNumbers`.

Il s'agit ici de mettre au carré **chaque valeur** et de renvoyer un tableau contenant ces nouvelles valeurs. (`2²` ça fait `2 * 2 === 4`)

Les consignes sont dans le fichier, mais voici comment on voudrait l'utiliser:

```js
const results = squareNumbers([2, 4, 5]);
console.log(results);
// devrait imprimer [4, 16, 25]
```

### La fonction `flattenArrays`

Dans le fichier [src/04-flatten-arrays.js](./src/04-flatten-arrays.js), tu dois coder une fonction nommée `flattenArrays` (On commence à avoir l'habitude hein? 😁).

La fonction doit **fusionner** les deux tableaux, **sans utiliser** `.concat` (on verra ça après 😁).

Pour l'instant, voici un peu de 📚[documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax#utiliser_la_d%C3%A9composition_dans_les_litt%C3%A9raux_de_tableau)📚 pour voir comment tu peux faire ça.

Les consignes sont dans le fichier, mais voici comment on voudrait l'utiliser:

```js
const smashedArray = flattenArrays([1, 2], ['a', 'b']);
console.log(smashedArray);
// doit imprimer [1, 2, 'a', 'b']
```

### La fonction `reduceArray`

Dans le fichier [src/05-reduce-array.js](./src/05-reduce-array.js), tu dois coder une fonction nommée `reduceArray` (Sans blagues! 😇).

La fonction doit renvoyer la somme des valeurs d'un tableau qu'on lui passe en argument.

Les consignes sont dans le fichier, mais voici comment on voudrait l'utiliser:

```js
const addition = reduceArray([1, 1, 1]);
console.log(addition); // devrait imprimer '3'

const concatenation = reduceArray(['plo', 'uf!']);
console.log(concatenation); // devrait imprimer '"plouf!"'
```

> Dans les tests, pas d'entourloupe, on enverra des tableaux composés uniquement de nombres OU de strings. Tu peux donc vérifier le type avec le premier élément du tableau.

### Le reste!

Il reste cinq fichiers. **OUI!** Tu as bien lu, CINQ.

Mais rassure toi! Il s'agit cette fois-ci de coder **les mêmes fonctions** que dans les cinq fichiers précédents, **MAIS**... avec les méthodes déjà existentes sur les arrays! 🤩

Tu vas me dire:

> Mais pourquoi le faire faire à la main alors? 😠

Ben comme ça, tu vois un peu mieux comment ça marche "behind the scenes" comme on dit 😉

Allez, c'est parti:

#### `filterNames`

Ça se passe dans le fichier [src/06-magic-filter.js](src/06-magic-filter.js). C'est les mêmes consignes que la première fois à **UNE** différence: Là, tu peux utiliser `Array.Prototype.filter()` et d'ailleurs, voici la [Documentation MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). 😁

#### `findName`

Le fichier [src/07-magic-find.js](src/07-magic-find.js) contient les instructions pour coder une méthode `findName`. Et là il faut le faire à l'aide la méthode `.find`, voici la [Documentation MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find).

#### `squareNumbers`

On commence à avoir l'habitude, il faut coder dans [src/08-magic-square.js](src/08-magic-square.js).

Ici, tu dois utiliser la méthode `.map` et voici la [Documentation MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map) (héééééééé oui. Toujours de la doc 😏).

#### `flattenArrays`

Hop, direction [src/09-magic-flatten.js](src/09-magic-flatten.js) 😁.

Le but? Ben... Coder une fonction `flattenArrays` (oh la surprise! 😆) qui utiliser la méthode `.concat`: [Doc MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat).

#### `reduceArray`

Allez, c'est la dernière 🙂

Dans le fichier [src/10-magic-reduce.js](src/10-magic-reduce.js), tu dois coder l'ULTIME fonction (note que j'ai pas dit la **fonction ultime** 😁).

Et encore une fois, tu vas pouvoir utiliser une méthode d'array qui fait déjà ce qu'on veut: `.reduce`.

Quoi?

Comment ça j'ai oublié la [Doc](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)?
