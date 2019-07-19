import React from "react";
import CharacterCard from "/components/CharactersList";
import shortid from "shortid";

const CharacterList = props => {
  console.log(props.props);
  console.log("hi from character list");
  return props.props.map(character => (
    <CharacterCard key={shortid()} character={character} />
  ));
};

export default CharacterList;

// import React from "react";
// import shortid from "shortid";

// const CharactersList = props => {
//   console.log(props.props);

//   return props.props.map(character => (
//     <CharacterCard key={shortid()} character={character} />
//   ));
// };

// export default CharactersList;
