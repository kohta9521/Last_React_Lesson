import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  return (
    <>
      <label htmlFor="123">ラベルへ移動</label>
      <input
        id="123"
        placeholder="こんにちは"
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <textarea
        name=""
        id="456"
        cols="30"
        rows="10"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      ></textarea>
      <h3>{val}</h3>
      <button onClick={clearVal}>クリア</button>
    </>
  );
};

export default Example;
