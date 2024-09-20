import React from "react";

const JoinLink = ({ name, styles }) => {
  return (
    <a href="https://linktr.ee/mlsaqau" className={`${styles}`} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
};

export default JoinLink;