import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [starWarsData, setStarWarsData] = useState([]);

  useEffect(() => {
    axios

      .get("https://swapi.co/api/people/")

      .then(response => {
        setStarWarsData(response.data.results);
      })

      .catch(error => {
        console.log(
          "This site is broken, however do not fret -- Starwars sucks anyway",
          error
        );
      });
  }, []);

  console.log(starWarsData);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div />
    </div>
  );
};
export default App;
