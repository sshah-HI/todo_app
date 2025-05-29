import React from "react";
import CRUDButton from "./CRUDButton";

const TodoCard = ({ className, number, todo, date, time, status }) => {
  return (
    <tr className={className + " " + status}>
      <th scope="row">{number}</th>
      <td className="text-truncate">{todo}</td>
      <td className="text-truncate">{date}</td>
      <td className="text-truncate">{time}</td>
      <td className="text-center">
        <CRUDButton
          className="btn btn-success btn-sm"
          i_className="fa-solid fa-check"
          type="button"
          id="create"
        />
      </td>
      <td className="text-center">
        <CRUDButton
          className="btn bg-info btn-sm"
          i_className="fa-solid fa-pen-to-square"
          type="button"
          id="edit"
        />
      </td>
      <td className="text-center">
        <CRUDButton
          className="btn btn-danger btn-sm"
          i_className="fa-solid fa-trash"
          type="button"
          id="delete"
        />
      </td>
    </tr>
  );
};

export default TodoCard;
