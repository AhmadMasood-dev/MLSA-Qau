import React from "react";

const Button = ({ name, styles, links = "/", onClick }) => {
  return (
    <button className={`${styles} `} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
