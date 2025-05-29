import React from "react";

export default function CRUDButton({ type, i_className, className }) {
  return (
    <div>
      <button type={type} className={className}>
        <i className={i_className}></i>
      </button>
    </div>
  );
}
