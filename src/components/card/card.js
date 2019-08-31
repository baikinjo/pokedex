import React from 'react'

import './card.css'

export const Card = props => (
  <div className="card-container">
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`}
      alt="pokemon"
    />
    <h2>{props.pokemon.name}</h2>
  </div>
)
