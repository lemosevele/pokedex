(function(){

    const search_id = document.querySelector("#id_search");
    const search_button = document.querySelector("#search");
    const name = document.querySelector("#name");
    const number = document.querySelector("#number");

    const apiUrl = 'https://pokeapi.co/api/v2/pokemon';


    search_button.addEventListener("click", function(){
        //typeof search_id === number && search_id <= 807
        
        pokemonId = search_id.value;
        getPokemon(pokemonId);
        customInput();
    });

    id_search.addEventListener("keyup", function(e){
        pokemonId = search_id.value;
        if(e.keyCode === 13){
            getPokemon(pokemonId);
            customInput();
        }
    });

    function customInput(){
        search_id.value = "";
        search_id.focus();
    }

    async function getPokemon(id){
        const response = await fetch(`${apiUrl}/${id}`);
        const data = await response.json();

        // name.textContent = data.name;
        // number.textContent = data.id;

        console.log(data.types.map(item => ' ' + item.type.name).toString());

        return data;
    }

})();





// async function getPokemon(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// getPokemon(apiUrl)
//   .then(data => {
//     const pokemonName = data.name;
//     name.innerHTML = pokemonName;
//   })
//   .catch(error => console.log(`Error: ${error.message}`))