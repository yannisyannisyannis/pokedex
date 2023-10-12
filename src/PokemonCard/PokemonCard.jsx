
const pokemonList=[ 
    { name:'Bulbasaur',
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },

{ 
    name:'Mew',
},
];

function PokemonCard() {

    const pokemon = pokemonList[1];

    if (pokemon.name && pokemon.imgSrc != null)
    
    {

    return  ( <> 
    <p> {pokemon.name}</p>
    <img src= {pokemon.imgSrc}/>
    </>
    );
    }
     return(
    <>

    <p>???</p>
    
     </> 
     
     );

     }


export default PokemonCard