import Child from "./components/Child";

const Example = () => {
  return (
    <>
      <Child color="red" num={123} obj={{ name: "Tom", age: 10 }} />;
      <Child color="blue" />;
      <Child />;
    </>
  );
};
export default Example;
