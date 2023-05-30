import { useState } from "react";

const Example = () => {
  let [val, setVal] = useState("hello");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value);
        }}
      />
      = {val}
    </>
  );
};

export default Example;
