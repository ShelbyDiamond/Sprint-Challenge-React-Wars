import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CharacterList from "./components/CharacterList";
const App = () => {
  const [starwars, setStarwars] = useState([]);
  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then(element => {
      setStarwars(element.data.results);
    });
  }, []);

  console.log(starwars);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList props={starwars} />
    </div>
  );
};

export default App;
