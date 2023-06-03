import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterValue, setFilterValue] = useState("");
  // console.log(animals.filter((animal) => animal === "dog"));
  return (
    <>
      <h3>配列のフィルター</h3>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => animal.indexOf(filterValue) !== -1)
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
