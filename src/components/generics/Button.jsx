import React from "react";

const Button = ({ name, styles, onClick }) => {
  return (
    <button href="https://www.linktr.ee/mlsaqau"className={`${styles} `} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;

