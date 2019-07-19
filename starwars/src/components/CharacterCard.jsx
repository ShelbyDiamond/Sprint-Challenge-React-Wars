import React from "react";

const CharacterCard = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Skin color: {props.skin_color}</p>
      <p>Eye color: {props.eye_color}</p>
      <p>Birth year: {props.birth_year}</p>
    </div>
  );
};

export default CharacterCard;
