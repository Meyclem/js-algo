/* eslint quotes: ["error", "backtick"] */
const { findInCode } = require(`./read-code`);
const path = require(`path`);

describe(`Les variables`, () => {
    const filePath = path.resolve(__dirname, `../src/00-les-bases/00-variables.js`);

    test(`Définir une variable constante 'promo' avec la valeur "Zagreus"`, async () => {
        const {value: promo, keyword} = await findInCode(`promo`, filePath);

        expect(keyword).toBe(`const`);
        expect(promo).toBe(`Zagreus`);
    });

    test(`Définir une variable constante 'firstname' avec le string 'John'`, async () => {
        const {value: firstname, keyword} = await findInCode(`firstname`, filePath);

        expect(keyword).toBe(`const`);
        expect(firstname).toBe(`John`);
    });

    test(`Définir une variable modifiable 'age' avec le chiffre '42'`, async () => {
        const {value: age, keyword} = await findInCode(`age`, filePath);

        expect(keyword).toBe(`let`);
        expect(age).toBe(42);
    });

    test(`Définir une variable constante 'oneMoreYear' avec le chiffre '1'`, async () => {
        const {value: oneMoreYear, keyword} = await findInCode(`oneMoreYear`, filePath);

        expect(keyword).toBe(`const`);
        expect(oneMoreYear).toBe(1);
    });
    
    test(`Définir une variable modifiable 'happyBirthday' avec la l'addition de age et oneMoreYear`, async () => {
        const {value: happyBirthday, keyword} = await findInCode(`happyBirthday`, filePath);
    
        expect(keyword).toBe(`let`);
        expect(happyBirthday).toBe(43);
    });

    test(`Changer la valeur de 'age' change la valeur de 'happyBirthday'`, async () => {
        const { value: age } = await findInCode(`happyBirthday`, filePath, {
            regex: /(let|const)(\s*?)age(\s*?)=(\s*?)([0-9]{2})(\s*?);/,
            string: `const age = 1;`
        });
    
        expect(age).toBe(2);
    });

    test(`Définir une variable 'pets' contenant les strings 'Garfield', 'Félix', 'Rantaplan', 'Robert'`, async () => {
        const {value: pets, keyword} = await findInCode(`pets`, filePath);

        expect(keyword).toBe(`const`);
        expect(Array.isArray(pets)).toBe(true);
        expect(pets).toEqual([`Garfield`, `Félix`, `Rantaplan`, `Robert`]);
    });

    test(`Définir une variable constante 'garfield' avec la valeur du 1er élément de 'pets'`, async () => {
        const {value: garfield, keyword} = await findInCode(`garfield`, filePath);

        expect(keyword).toBe(`const`);
        expect(garfield).toBe(`Garfield`);
    });

    test(`Changer la valeur de 'pets[0]' change la valeur de 'garfield'`, async () => {
        const { value: garfield } = await findInCode(`garfield`, filePath, {
            regex: /(let|const) garfield/,
            string: `pets[0] = "Le chat roux"; $&`
        });
    
        expect(garfield).toBe(`Le chat roux`);
    });

    test(`Définir une variable constante 'lastPet' avec la valeur du dernier élément de 'pets'`, async () => {
        const {value: lastPet, keyword} = await findInCode(`lastPet`, filePath);

        expect(keyword).toBe(`const`);
        expect(lastPet).toBe(`Robert`);
    });

    test(`Ajouter un élément à 'pets' change la valeur de 'lastPet'`, async () => {
        const { value: lastPet } = await findInCode(`lastPet`, filePath, {
            regex: /(let|const) lastPet/,
            string: `pets.push("Nounours"); $&`
        });
        
        expect(lastPet).toBe(`Nounours`);
    });

    test(`Définir une variable constante 'allPets' avec la valeur jointe des éléments de 'pets'`, async () => {
        const {value: pets} = await findInCode(`pets`, filePath);
        const expectedValue = pets.join(`, `);
        const {value: allPets, keyword} = await findInCode(`allPets`, filePath);

        expect(keyword).toBe(`const`);
        expect(allPets).toBe(expectedValue);
    });

    test(`Changer les éléments de 'pets' change la valeur de 'allPets'`, async () => {
        const {value: pets} = await findInCode(`pets`, filePath);
        pets.push(`Nounours`);
        const expectedValue = pets.join(`, `);
        const { value: allPets } = await findInCode(`allPets`, filePath, {
            regex: /(let|const) allPets/,
            string: `pets.push("Nounours"); $&`
        });

        expect(allPets).toBe(expectedValue);
    });

    test(`Définir la variable 'jon' avec les bonnes propriétés`, async () => {
        const {value: jon, keyword} = await findInCode(`jon`, filePath);

        expect(keyword).toBe(`const`);
        expect(typeof jon).toBe(`object`);
        expect(jon.firstname).toBe(`John`);
        expect(jon.age).toBe(42);
    });

    test(`Changer la valeur de 'age' change l'age de John`, async () => {
        const { value: jon } = await findInCode(`jon`, filePath, {
            regex: /(let|const)(\s*?)age(\s*?)=(\s*?)([0-9]{2})(\s*?);/,
            string: `const age = 1;`
        });
    
        expect(jon.age).toBe(1);
    });
});
