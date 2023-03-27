// create a pokemon variable
let pokemonArr = [];

// 
async function getPokemon(cuantity) {
    try {
        for  (let count = 0; count < cuantity; count++) {
            const randomPokemon = Math.floor(Math.random() * 1010) + 1;
            const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemon);
            const pokemon = await data.json();
            pokemonArr.push(pokemon);
        }

    } catch ( error ) {
        console.log(error);
    }
}

async function generateCard(cuantity) {
    for (let count = 0; count < cuantity; count++) {
        const actualPokemon = count + 1;

        const spriteP = document.getElementById(`imgP${actualPokemon}`);
        const nameP = document.getElementById(`nameP${actualPokemon}`);
        const typeP = document.getElementById(`typeP${actualPokemon}`);
        const hpP = document.getElementById(`hpP${actualPokemon}`);
        const attackP = document.getElementById(`attackP${actualPokemon}`);
        const defenseP = document.getElementById(`defenseP${actualPokemon}`);
        const speedP = document.getElementById(`speedP${actualPokemon}`);

        spriteP.setAttribute("src", pokemonArr[count].sprites.front_default);
        nameP.textContent = pokemonArr[count].name;
        pokemonArr[count].types[1] !== undefined ? 
            typeP.textContent = pokemonArr[count].types[0].type.name + '/' + pokemonArr[count].types[1].type.name :
            typeP.textContent = pokemonArr[count].types[0].type.name;
        hpP.textContent = pokemonArr[count].stats[0].base_stat;
        attackP.textContent = pokemonArr[count].stats[1].base_stat;
        defenseP.textContent = pokemonArr[count].stats[2].base_stat;
        speedP.textContent = pokemonArr[count].stats[5].base_stat;
    }
}

async function searchPokemon() {
    const input = document.getElementById('inputSearch').value;
    const clear = document.getElementById('buttonClear');
    const cards = document.getElementById('pokemonCardsGrid');
    const card = document.getElementById('pokemonCardGrid');

    try {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + input);
        const pokemon = await data.json();

        const spriteP = document.getElementById(`imgP13`);
        const nameP = document.getElementById(`nameP13`);
        const typeP = document.getElementById(`typeP13`);
        const hpP = document.getElementById(`hpP13`);
        const attackP = document.getElementById(`attackP13`);
        const defenseP = document.getElementById(`defenseP13`);
        const speedP = document.getElementById(`speedP13`);

        spriteP.setAttribute("src", pokemon.sprites.front_default);
        nameP.textContent = pokemon.name;
        pokemon.types[1] !== undefined ? 
            typeP.textContent = pokemon.types[0].type.name + '/' + pokemon.types[1].type.name :
            typeP.textContent = pokemon.types[0].type.name;
        hpP.textContent = pokemon.stats[0].base_stat;
        attackP.textContent = pokemon.stats[1].base_stat;
        defenseP.textContent = pokemon.stats[2].base_stat;
        speedP.textContent = pokemon.stats[5].base_stat;
        
        clear.classList.remove('hiden');
        card.classList.remove('hiden');
        cards.classList.add('hiden');

    } catch ( error ) {
        console.log(error);
    }
}

async function clearSearch() {
    const clear = document.getElementById('buttonClear');
    const cards = document.getElementById('pokemonCardsGrid');
    const card = document.getElementById('pokemonCardGrid');
    await generateCard(12);
        
    clear.classList.add('hiden');
    card.classList.add('hiden');
    cards.classList.remove('hiden');

}

// Initialize project
(async () => {
    await getPokemon(12);
    await generateCard(12);
})();