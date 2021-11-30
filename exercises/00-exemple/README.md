# Exercices Javascript - Exemples

Dans ce repo tu trouveras une série d'exercices pour t'entraîner à pratiquer le JavaScript!

## Setup

Avant de commencer à coder, quelques p'tites choses!
Il va falloir lancer quelques commandes, **que nous expliquerons** plus en détail dans les prochains jours, un peu de patience! 😉

Tout, d'abord, il faut cloner ce repo! Ensuite, va dans le dossier `js-algo-00-exemple` et **lance cette ligne de commande dans ton terminal**:

```bash
npm install
```
> On expliquera cette commande en détail d'ici quelques jours, en S03!

## Ils sont où les exercices?

Dans le dossier `src` tu trouveras les choses à faire, ici: `src/01-exemple.js`.

Il y a des instructions en commentaires, par exemple:

```js
// Définir une variable constante nommée promo et lui attributer la valeur "Zagreus"
```

### Et pour savoir si c'est bon?

On a prévu quelques tests pour toi. Pour voir ça, lance ça dans ton terminal:

```bash
npm test
```

et ça va te sortir plein de trucs 😱

**⚠️ Il va y avoir pas mal de choses écrites, pense à scroller dans la fenêtre du terminal 😉 ⚠️**

On va décomposer ça ensemble 🤗

```
 FAIL  .tests/01-exemple.test.js
  Exempes de TDD
    ✕ Définir une variable constante 'promo' avec la valeur "Zagreus"
    ✕ Définir une variable modifiable 'myNumber' avec la valeur '1'
    ✕ Afficher "Hello World!" dans la console
    ✕ Afficher un chiffre aléatoire entre 0 et 1 dans la console
```

> les tests ne sont pas réussis, c'est écrit `FAIL` tout en faut, et on a des `✕` devant chaque ligne

Mais **on a plus de détail** si on regarde bien!!

```
  ● Exempes de TDD › Définir une variable constante 'promo' avec la valeur "Zagreus"

    thrown: "File does not contain any code"

      21 |
      22 |
    > 23 |     test(`Définir une variable constante 'promo' avec la valeur "Zagreus"`, async () => {
         |     ^
      24 |         const {value: promo, keyword} = await findInCode(`promo`, filePath);
      25 |
      26 |         expect(keyword).toBe(`const`);

      at .tests/01-exemple.test.js:23:5
      at Object.<anonymous> (.tests/01-exemple.test.js:5:1)
```
> ☝ c'est l'output (la sortie) pour **un** des tests.
>
> ça nous dit: "File does not contain any code"

Pas de code? Alors allons-y!

Dans le fichier `src/01-exemple.js`:

```js
// Définir une variable modifiable nommée promo et lui attributer la valeur "Zagreus"
let promo;
```
> Oui, je sais, c'est pas ce qui est demandé 😇... Mais relançons les tests avec `npm test` pour voir:

```
  ● Exempes de TDD › Définir une variable constante 'promo' avec la valeur "Zagreus"

    expect(received).toBe(expected) // Object.is equality

    Expected: "const"
    Received: "let"

      24 |         const {value: promo, keyword} = await findInCode(`promo`, filePath);
      25 |
    > 26 |         expect(keyword).toBe(`const`);
         |                         ^
      27 |         expect(promo).toBe(`Zagreus`);
      28 |     });
      29 |
```

Si on décompose:
- `Expected: "const"`: c'est ce qu'on attend dans ton code pour la définition de la variable `promo`
- `Received: "let"`: et ça, c'est ce qu'on a, puis qu'on a écrit `let promo;` 😁
- `> 26 |         expect(keyword).toBe(`const`);`: c'est indicatif, c'est l'endoit du test où ça plante. On essaye de voir si `keyword === 'const'` (avec `toBe`). Ben non, puisqu'on a mis `let`.

💪 Allez, on fait la suite? 💪

### On s'arrête où?

Tu sauras que c'est fini quand tous les tests d'un fichier sont passés:
```
 PASS  .tests/01-exemple.test.js
  Exempes de TDD
    ✓ Définir une variable constante 'promo' avec la valeur "Zagreus" (22 ms)
    ✓ Définir une variable modifiable 'myNumber' avec la valeur '1' (3 ms)
    ✓ Afficher "Hello World!" dans la console (1 ms)
    ✓ Afficher un chiffre aléatoire entre 0 et 1 dans la console (1 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
```
> - chaque ligne commence par `✓` ce qui veut dire que le test concerné est réussi
> - `Tests:       4 passed, 4 total`: Il y a 4 tests réussis, sur un total de 4 tests. Bien joué!

# 🤩
