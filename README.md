# JS Algo Excercises

L'app est prévue pour aider à générer des dossiers d'exercices pour les étudiants.

L'objectif étant de leur permettre de pratiquer certaines notions. Un exemple est disponible dans `./exercises/00-exemple` _([voir ici](./exercices/00-exemple/))_.

## Setup

L'app est un ensemble de [workspaces npm](https://docs.npmjs.com/cli/v7/using-npm/workspaces). 

**⚠️ Il faut obligatoire npm en version >= 7.x.x ⚠️**

```bash
# Installer TOUTES les dépendances des exercises et du tooling
npm install

# Installer les dépendances dans un seul exercice
npm install -w ./exercises/exercice-folder
```

L'intérêt du monorepo (avec les _workspaces_), c'est qu'on aura un seul dossier `node_modules` partagé entre toutes les exercices. Si plusieurs exercices ont des dépendances partagées, mais dans des versions différentes, c'est **npm** va gérer le versioning des deps concernées.

## Anatomie d'un exercice

### La version prof

Dans le monorepo, c'est à dire la version **péda** des exercices, **chaque dossier rangé dans `./exercises`** est un repo indépendant, composé de:
- un dossier `.tests` dans lequel il faut coder des tests. Un exemple [ici](./exercises/00-exemple/.tests/01-exemple.test.js).
- un dossier `src` dans lequel coder **la solution de l'exercice** (voir [ici](./exercises/00-exemple/src/01-exemple.js)).
- un dossier `src.student` dans lequel on met la version destinée à l'étudiant (voir [ici](./exercises/00-exemple/src.student/01-exemple.js)).
- de la conf, par exemple `.eslint`, `.eslintignore`, `package.json` etc... En bref, comme dans un repo "classique".
- **un `README.md` avec les consignes de l'exercice.**

### Générer la version "apprenant"

Pour générer un ou plusieurs dossiers pour les apprenants, il faut donc que toutes les conditions du dessus soient remplies.

```bash
npm run generate-repositories [...args (optionnels)]
```

- lancer la commande sans arguments va générer tous les dossiers en version apprenants:
  ```bash
  $npm run generate-repositories

  ✅ Exercises sucessfully generated

  📁 /absolute-path/js-algo-00-exemple
  📁 /absolute-path/js-algo-01-variables
  # ...
  ```
- lancer la commande un ou plusieurs arguments va générer les dossiers choisis en version apprenants:
  ```bash
  $npm run generate-repositories 00-exemple

  ✅ Exercises sucessfully generated

  📁 /absolute-path/js-algo-00-exemple
  ```

Dans tous les cas, chaque dossier généré sera architecturé comme ça:

```
js-algo-00-exemple
    ├── .eslintignore
    ├── .eslintrc
    ├── .git/
    ├── .gitignore
    ├── .tests
    │   ├── 01-exemple.test.js
    │   └── read-code.js
    ├── README.md
    ├── package.json
    └── src
        └── 01-exemple.js
```

### Setup et utilisation

Les consignes pour utiliser ce repo, **sont celles que que tu donnes aux apprenants**, essayons d'éviter les choses trop exotiques, et de rester au maximum dans du classique:
- `npm install`: obligatoire, puisqu'il faut au minimum `jest`.
- `npm test`: obligatoire également, pour lancer les tests.
- et après, selon les besoins: `npm start`, etc...

## Où mettre le dossier apprenant

Le mieux est de créer un repo sur l'orga d'une promo en cours, d'associer le git du dossier local à ce repo avec par exemple:

```bash
git remote add origin git@github.com:O-clock-Zagreus/js-algo-00-exemple.git
git branch -M main
git push -u origin main
```

Ensuite, libre à toi de créer un [O'Challenge](https://kourou.oclock.io/wp/wp-admin/admin.php?page=ochallenge)!
