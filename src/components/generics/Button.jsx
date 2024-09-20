// import React from "react";

// const Button = ({ name, styles, onClick }) => {
//   return (
//     <button href="https://www.linktr.ee/mlsaqau"className={`${styles} `} onClick={onClick}>
//       {name}
//     </button>
//   );
// };

// export default Button;
import React from "react";

const Button = ({ name, styles }) => {
  return (
    <a href="https://linktr.ee/mlsaqau" className={`${styles}`} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
};

export default Button;
