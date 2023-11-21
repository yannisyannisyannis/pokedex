// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./PokemonCard/PokemonCard";
import NavBar from "./componnent/NavBar"

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);

  useEffect ( 
    ()=> { 
     alert("hello pokemon trainer")
    }, 
    []
  );

  const handleNext = () => {
    if (pokemonIndex < pokemonList.length - 1)
      setpokemonIndex(pokemonIndex + 1);
  };

  const handlePreview = () => {
    if (pokemonIndex > 0) setpokemonIndex(pokemonIndex - 1);
  };

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
      imgSrc: "https://www.pokemon.com/fr/pokedex/mew",
    },
  ];

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

    <NavBar pokemonIndex={pokemonIndex}  pokemonList={pokemonList}  handleNext={handleNext} handlePreview={handlePreview} setpokemonIndex={setpokemonIndex}/>

    </>
  );
}

export default App;
