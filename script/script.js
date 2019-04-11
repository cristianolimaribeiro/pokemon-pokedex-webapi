$(document).ready(function(){
    DefineClicks();
})
function DefineClicks(){
    $('#pokebola').click(function(){
        SearchPokemon();
    })
}
function ClearInput(){
    $('#input').val('');
}

function SearchPokemon(){
    var id = $('#input').val();
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/"+ id +"/",
        method: "GET"    
    })
    .then(function(pokemon){
        $('#pokemon').text(pokemon.name);
        $('#id').text(pokemon.id);
        $('#foto-pokemon').attr('src', pokemon.sprites.front_default);
        $('#tipo').text('');
        for(var i = 0; i < pokemon.types.length; i++){
            $('#tipo').append(`<li>${pokemon.types[i].type.name}</li>`);
        }
        ClearInput();
    })
    .fail(function(error){
        console.log(error)
    })
}