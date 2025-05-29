import React from "react";
import CRUDButton from "./CRUDButton";

const Navbar = ({ setDate, setTime }) => {
  return (
    <nav
      className="navbar navbar-dark bg-warning px-2"
      style={{ backgroundColor: "#662e0f" }}
    >
      <form className="d-flex p-2 align-items-center w-100">
        <div className="d-flex p-2 justify-content-start align-items-center w-100">
          <input
            className="form-control me-2 p-2 flex-grow-1"
            type="text"
            id="note-title"
            name="note-title"
            placeholder="Add todo"
          />
          <input
            className="form-control me-2 p-2"
            type="date"
            id="enddate"
            name="enddate"
            value="2026-07-22"
            onChange={(e) => setDate(e.target.value)}
            min="2026-01-01"
            max="2027-12-31"
          />
          <input
            className="form-control me-2 p-2"
            type="time"
            id="endtime"
            name="endtime"
            onChange={(e) => setTime(e.target.value)}
            value="10:00"
            min="09:00"
            max="18:00"
            required
          />
        </div>

        <div className="d-flex align-items-center gap-1 justify-content-end">
          <CRUDButton
            className="btn btn-success"
            i_className="fa-solid fa-plus"
            type="submit"
          />
          <CRUDButton
            className="btn btn-danger"
            i_className="fa-solid fa-xmark"
            type="submit"
          />
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
