import React from "react";

const Button = ({ name, styles, links }) => {
  return (
    <div>
      <li>
        <a href="/" class={`hover-links ${styles} `}>
          {name}
        </a>
      </li>
    </div>
  );
};

export default Button;
