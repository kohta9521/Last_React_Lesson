import { useState } from "react";

const Example = () => {
  let valArry = useState(0);
  return (
    <>
      <input type="text" onChange={(e) => e.target.value} /> = {valArry};
    </>
  );
};

export default Example;
