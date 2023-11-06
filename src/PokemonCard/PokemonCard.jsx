

function PokemonCard(props) {
  return (
  
    <figure className="card">
        {props.pokemon.imgSrc != null ? (
          <img
            className="card-img"
            src={props.pokemon.imgSrc}
            alt={props.pokemon.name}
          />
        ) : (
          <p> ??? </p>
        )}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  
  )
}

export default PokemonCard;
