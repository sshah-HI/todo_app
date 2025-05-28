import React from "react";

const TodoCard = () => {
  return (
    <div className="d-flex p-2">
      <h2>This is the first note</h2>
      <time datetime="2018-07-07">July 7 </time>
      <time datetime="20:00"> 20:00</time>
      <button className="bi bi-check-lg"></button>
      <button className="bi bi-x-lg" type="submit"></button>
    </div>
  );
};

export default TodoCard;
