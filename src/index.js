(function(){

    const search_id = document.querySelector("#id_search");
    const search_button = document.querySelector("#search");

    const name = document.querySelector("#name");
    const number = document.querySelector("#number");
    const img = document.querySelector("#img");

    const type = document.querySelector("#type");
    const skills = document.querySelector("#skills");
    const weight = document.querySelector("#weight");
    const height = document.querySelector("#height");


    const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

    function init(){
        getPokemon(25);
    };

    init();

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
        const maxCaracteres = 852;

        name.textContent = data.name;
        number.textContent = "#"+data.id;
        img.src = data.sprites.front_default;

        type.textContent = data.types.map(item => ' ' + item.type.name).toString();
        weight.textContent = data.weight/10+"kg";
        height.textContent = data.height/10+"m";

        sk = data.moves.map(item => ' ' + item.move.name).toString();
        if (sk.length <= maxCaracteres) {
            skills.textContent = sk;
        } else{
            var subSkill = sk.slice(0, maxCaracteres);
            subSkill = subSkill + "...";
            skills.textContent = subSkill;
        }

        return data;
    }

})();
