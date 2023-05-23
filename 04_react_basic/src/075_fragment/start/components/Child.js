import "./Child.css";
import React from "react";

const Child = () => {
  return (
    // 画面に描画される際にはなかったものとみなされる
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quo
        repudiandae iste ut, cupiditate, hic perspiciatis cum culpa corporis
        suscipit dolor doloribus saepe, laboriosam architecto atque porro fuga
        inventore vero.
      </p>
    </React.Fragment>
  );
};

export default Child;
