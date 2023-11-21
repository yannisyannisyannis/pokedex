function NavBar({ pokemonList, setpokemonIndex }) {
  const handlePika = (index) => {
    // alert("pika pikachu");
    console.log(index);
    setpokemonIndex(index);
    if (index == 3) {
      setTimeout(() => {
        alert("pika pikachu");
      }, 100);
    }
  };

  return (
    //     <div>
    //     {pokemonIndex < pokemonList.length-1 ? <button onClick={handleNext}>Suivant</button> : null}

    //     {pokemonIndex > 0 ? <button onClick={handlePreview}>Précédent</button> : null}
    //   </div>

    <div>
      <ul>
        {pokemonList.map((pokemon, index) => {
          return (
            <li key={pokemon}>
              <button onClick={() => handlePika(index)}>{pokemon.name} </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBar;
