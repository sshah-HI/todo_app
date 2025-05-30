import React, { useEffect, useState } from "react";
import CRUDButton from "./CRUDButton";
import {
  buttonYellow,
  buttonGreen,
  tableGreen,
  tableYellow,
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
  todoList, //for debugging purposes
}) => {
  const [rowStatus, setRowStatus] = useState(status);
  const [i_className, setI_classname] = useState("fa-solid fa-check");
  const [completenessclassName, setcompletenessclassName] = useState(
    "btn btn-success btn-sm"
  );

  function handleComplete() {
    if (i_className == "fa-solid fa-check") {
      setI_classname("fa-regular fa-rectangle-xmark");
      setRowStatus(tableGreen);
      setcompletenessclassName(`btn ${buttonYellow} btn-sm`);
      changeStatus();
    } else {
      setI_classname("fa-solid fa-check");
      setStatus(tableYellow);
      setRowStatus(tableYellow);
      setcompletenessclassName(`btn ${buttonGreen} btn-sm`);
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
          className={completenessclassName}
          i_className={i_className}
          type="button"
          id="create"
          onClick={() => {
            handleComplete();
          }}
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
          onClick={onDelete}
        />
      </td>
    </tr>
  );
};

export default TodoCard;
