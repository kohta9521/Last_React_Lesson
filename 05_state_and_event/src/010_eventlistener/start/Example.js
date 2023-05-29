const Example = () => {
  const clickHandler = () => {
    alert("クリックされました！");
  };

  const clickHandler2 = () => {
    let i = 0;
    i++;
    console.log(`ボタンが${i}回クリックされました。`);
  };
  return (
    <>
      <button onClick={clickHandler}>クリックしてね！</button>
      <button onClick={clickHandler2}>クリックしてね！</button>
    </>
  );
};
export default Example;
