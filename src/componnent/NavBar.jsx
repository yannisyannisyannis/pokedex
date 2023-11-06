/* eslint-disable react/prop-types */
function NavBar ({pokemonIndex, pokemonList, handleNext, handlePreview, setpokemonIndex}) { 

    return (
//     <div>
//     {pokemonIndex < pokemonList.length-1 ? <button onClick={handleNext}>Suivant</button> : null}

//     {pokemonIndex > 0 ? <button onClick={handlePreview}>Précédent</button> : null}
//   </div>

        <div> 
            <ul>
                {pokemonList.map((pokemon,index) => {
                    return (
                    <li key={ pokemon}> 
                    <button onClick={() => setpokemonIndex(index)}> {pokemon.name} </button>
                    </li>

                    )
                })
                }
               
            </ul>
        </div>



    )
    
}

export default NavBar