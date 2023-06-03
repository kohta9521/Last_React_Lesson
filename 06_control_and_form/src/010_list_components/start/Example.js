const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // const animalList = [];
  // for (const animal of animals) {
  //   animalList.push(<li>{animal}</li>);
  // }

  // マップを使用した場合
  const helloAnimals = animals.map((animal) => (
    <li key={animal}>hello, {animal}</li>
  ));

  // あまり使わない
  // for{const animal of animals} {

  // }
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {helloAnimals}
      </ul>
    </>
  );
};

export default Example;
