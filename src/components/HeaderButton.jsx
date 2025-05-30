import React from "react";

const HeaderButton = ({ className, name, onClick }) => {
  return (
    <button
      className={`navbar-toggler ${className}`}
      type="button"
      aria-controls="navbarExample01"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default HeaderButton;
