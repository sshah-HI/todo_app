import React, { useState } from "react";
import CRUDButton from "./CRUDButton";

const TodoCard = ({
  className,
  number,
  todo,
  date,
  time,
  status,
  onDelete,
}) => {
  const [rowStatus, setRowStatus] = useState(status);
  const [i_className, setI_classname] = useState("fa-solid fa-check");
  const [completenessclassName, setcompletenessclassName] = useState(
    "btn btn-success btn-sm"
  );

  function handleCompleteness() {
    if (i_className == "fa-solid fa-check") {
      setI_classname("fa-regular fa-rectangle-xmark");
      setRowStatus("table-success");
      setcompletenessclassName("btn btn-warning btn-sm");
    } else {
      setI_classname("fa-solid fa-check");
      setRowStatus("table-warning");
      setcompletenessclassName("btn btn-success btn-sm");
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
            handleCompleteness();
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
