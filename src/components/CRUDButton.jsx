import React from "react";

export default function CRUDButton({ type, i_className, className, onClick }) {
  return (
    <div>
      <button type={type} className={className} onClick={onClick}>
        <i className={i_className}></i>
      </button>
    </div>
  );
}
