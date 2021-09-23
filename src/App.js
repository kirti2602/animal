import React, { useState } from "react";
import "./styles.css";

const animalDictionary = {
  "🐶": "dog",
  "🐺": "wolf",
  "🐱": "cat",
  "🐰": "rabbit",
  "🐯": "tiger",
  "🐗": "boar",
  "🦝": "fox",
  "🦧": "orangutan",
  "🦥": "sloth",
  "🦄" : "unicorn",
  "🐼" : "panda",
  "🦔" : "hedgehog"
};

const animals = Object.keys(animalDictionary);

export default function App() {
  const [animal, setanimal] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here...");

  function changeHandler(event) {
    const inputAnimal = event.target.value;
    setanimal(inputAnimal);

    if (inputAnimal in animalDictionary) {
      setMeaning(animalDictionary[inputAnimal]);
    } else {
      setMeaning("failure to recognise this animal😥");
    }
  }

  function animalClickHandler(inputAnimal) {
    setMeaning(animalDictionary[inputAnimal]);
  }

  return (
    <div className="App">
      <h1>animal interpreter</h1>
      <input
        onChange={changeHandler}
        value={animal}
        placeholder={"search your animal"}
        style={{
          padding: "1em",
          minWidth: "80%",
          fontFamily: "Open Sans",
          backgroundColor: "#f5f6fa"
        }}
      />
      <h2> {animal} </h2> {}
      <h3> {meaning} </h3> {}
      {animals.map((animal) => (
        <span
          onClick={() => animalClickHandler(animal)}
          style={{ fontSize: "3.5rem", padding: "1.5rem", cursor: "pointer" }}
        >
          {" "}
          {animal}{" "}
        </span>
      ))}
    </div>
  );
}
