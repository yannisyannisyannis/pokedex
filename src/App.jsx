// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import PokemonCard from './PokemonCard/PokemonCard'

function App() {

  const [pokemonIndex, setpokemonIndex] = useState(0);



  const handleNext= ()=> { 

    if (pokemonIndex < pokemonList.length-1)

    setpokemonIndex(pokemonIndex+1)
  }


  const handlePreview= ()=> { 

    if (pokemonIndex > 0)


    setpokemonIndex(pokemonIndex-1)
  }

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
        imgSrx: "https://www.pokemon.com/fr/pokedex/mew",
      },
    ];
 

  return (
    <>
    
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>

      <div>
      {pokemonIndex < pokemonList.length-1 ? <button onClick={handleNext}>Suivant</button> : null}

      {pokemonIndex > 0 ? <button onClick={handlePreview}>Précédent</button> : null}
    </div>
    </>
  )
}

export default App
