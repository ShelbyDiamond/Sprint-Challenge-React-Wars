import React from "react";
import CharacterCard from "./CharacterCard";
import shortid from "shortid";

const CharacterList = props => {
  return props.props.map(character => (
    <CharacterCard key={shortid()} character={character} />
  ));
};

export default CharacterList;
