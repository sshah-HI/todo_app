import { useState, useEffect } from "react";
import CRUDButton from "./CRUDButton";

const Navbar = ({ addTodoList }) => {
  const formatDateISO = (date) => {
    // Convert the date to ISO string
    const isoString = date.toISOString();
    // Split at the "T" character to get the date part
    const formattedDate = isoString.split("T")[0];
    return formattedDate;
  };

  function Reset() {
    setDate(todayDate);
    setTime(todayTime);
    setTodo("");
  }

  const today = new Date();
  const todayDate = formatDateISO(today);
  const todayTime = today.toTimeString().split(" ")[0];

  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(todayDate);
  const [time, setTime] = useState(todayTime);

  return (
    <nav
      className="navbar navbar-dark bg-warning px-2"
      style={{ backgroundColor: "#662e0f" }}
    >
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
            min={todayDate}
            max="2027-12-31"
            required
          />
          <input
            className="form-control me-2 p-2"
            type="time"
            id="endtime"
            name="endtime"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
          />
        </div>

        <div className="d-flex align-items-center gap-1 justify-content-end">
          <CRUDButton
            className="btn btn-success"
            i_className="fa-solid fa-plus"
            type="button"
            onClick={() =>
              addTodoList({ todo, date, time, status: "table-warning" })
            }
          />
          <CRUDButton
            className="btn btn-danger"
            i_className="fa-solid fa-xmark"
            type="button"
            onClick={() => Reset()}
          />
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
