import CRUDButton from "./CRUDButton";
import { getTodayDate, getTodayTime } from "../utils/dateUtils";
import { useState } from "react";

const Navbar = ({
  todo,
  setTodo,
  date,
  setDate,
  time,
  setTime,
  status,
  iconClassName,
  completeStatusClass,
  addTodoList,
}) => {
  const [keyIndex, setKeyIndex] = useState(0);

  function handlePlus(e) {
    e.preventDefault();

    const form = e.target.closest("form");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    addTodoList({
      key: keyIndex,
      todo,
      date,
      time,
      status,
      iconClassName,
      completeStatusClass,
    });
    setKeyIndex((prev) => prev + 1);
    // setTodo("");
  }

  function Reset() {
    setTodo("");
    setDate(getTodayDate());
    setTime(getTodayTime());
  }

  return (
    <nav className="navbar navbar-dark bg-warning px-2">
      <form className="d-flex p-2 align-items-center w-100">
        <div className="d-flex p-2 justify-content-start align-items-center w-100">
          <input
            value={todo}
            required
            className="form-control me-2 p-2 flex-grow-1"
            type="text"
            id="note-title"
            name="note-title"
            placeholder="Add todo"
            onChange={(e) => setTodo(e.target.value)}
          />
          <input
            className="form-control me-2 p-2"
            type="date"
            id="enddate"
            name="enddate"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={getTodayDate()}
            max="2027-12-31"
            required
          />
          <input
            className="form-control me-2 p-2"
            type="time"
            id="endtime"
            name="endtime"
            onChange={(e) => setTime(e.target.value)}
            value={getTodayTime()}
            required
          />
        </div>

        <div className="d-flex align-items-center gap-1 justify-content-end">
          <CRUDButton
            className="btn btn-success"
            iconClassName="fa-solid fa-plus"
            type="submit"
            onClick={(e) => handlePlus(e)}
          />
          <CRUDButton
            className="btn btn-danger"
            iconClassName="fa-solid fa-xmark"
            type="button"
            onClick={() => Reset()}
          />
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
