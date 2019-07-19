import React from "react";
import CharacterCard from "./CharacterCard";
import shortid from "shortid";

const CharactersList = props => {
  console.log(props.props);

  return props.props.map(character => (
    <CharacterCard key={shortid()} character={character} />
  ));
};

export default CharactersList;
