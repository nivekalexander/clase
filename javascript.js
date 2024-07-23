// funcion API
function getPokemon() {
    const pokemonName = 'pikachu';
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
        if (!response.ok) {
            window.alert('Error de consulta');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const pokemonDataDiv = document.getElementById('pokemonData');
        pokemonDataDiv.innerHTML = `
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <div class='pokemonData__img'>
            <p>Name: ${data.name}</p>
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
        </div>
        `;
        pokemonDataDiv.style='display:flex;'
    })
    .catch(error => {
        window.alert('There was a problem with the fetch operation:', error);
    });
}