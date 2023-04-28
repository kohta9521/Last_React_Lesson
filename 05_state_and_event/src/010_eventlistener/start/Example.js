const Example = () => {
  const ClickHandler = () => {
    alert("クリックされました");
  };

  const ClickHandler2 = () => {
    console.log("クリックされました");
  };

  return (
    <>
      <button onClick={ClickHandler}>クリックしてね</button>
      <button onClick={ClickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
