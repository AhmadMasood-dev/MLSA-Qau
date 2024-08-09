import React from "react";

const Button = ({ name, styles, links = "/" }) => {
  return (
    <div>
      <li>
        <a href={links} className={`${styles} `}>
          {name}
        </a>
      </li>
    </div>
  );
};

export default Button;
