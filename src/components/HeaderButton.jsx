import React from "react";

const HeaderButton = ({ className, name }) => {
  return (
    <button
      className={`navbar-toggler ${className}`}
      type="button"
      aria-controls="navbarExample01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      {name}
    </button>
  );
};

export default HeaderButton;
