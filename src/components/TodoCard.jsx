import React, { useEffect, useState } from "react";
import CRUDButton from "./CRUDButton";
import {
  buttonYellow,
  buttonGreen,
  rowGreen,
  rowYellow,
} from "../styles/colors.js";

const TodoCard = ({
  className,
  number,
  todo,
  date,
  time,
  status,
  setStatus,
  onDelete,
  changeStatus,
  iconClassName,
  completeStatusClass,
  todoList, //for debugging purposes
}) => {
  const [rowStatus, setRowStatus] = useState(status);

  function handleComplete() {
    if (status == rowYellow) {
      setRowStatus(rowGreen);
      changeStatus();
    } else {
      setRowStatus(rowYellow);
      changeStatus();
    }
  }

  return (
    <tr className={className + " " + rowStatus}>
      <th scope="row">{number}</th>
      <td className="text-truncate">{todo}</td>
      <td className="text-truncate">{date}</td>
      <td className="text-truncate">{time}</td>
      <td className="text-center">
        <CRUDButton
          className={completeStatusClass}
          iconClassName={iconClassName}
          type="button"
          id="create"
          onClick={() => {
            handleComplete();
          }}
        />
      </td>
      {/* <td className="text-center">
        <CRUDButton
          className="btn bg-info btn-sm"
          iconClassName="fa-solid fa-pen-to-square"
          type="button"
          id="edit"
        />
      </td> */}
      <td className="text-center">
        <CRUDButton
          className="btn btn-danger btn-sm"
          iconClassName="fa-solid fa-trash"
          type="button"
          id="delete"
          onClick={onDelete}
        />
      </td>
    </tr>
  );
};

export default TodoCard;
