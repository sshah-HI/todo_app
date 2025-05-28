import React from "react";

const Navbar = ({ setDate, setTime }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <form className="d-flex p-2 align-items-center w-50">
        <input
          className="form-control me-2"
          type="text"
          id="note-title"
          name="note-title"
          placeholder="Add todo"
        />
        <input
          className="form-control me-2"
          type="date"
          id="enddate"
          name="enddate"
          value="2026-07-22"
          onChange={(e) => setDate(e.target.value)}
          min="2026-01-01"
          max="2027-12-31"
        />
        <input
          className="form-control me-2"
          type="time"
          id="endtime"
          name="endtime"
          onChange={(e) => setTime(e.target.value)}
          value="10:00"
          min="09:00"
          max="18:00"
          required
        />
        <button className="bi bi-plus-lg" type="submit"></button>
        <button className="bi bi-plus-square-fill" type="submit"></button>
        <button className="bi bi-x-lg" type="submit"></button>
      </form>
    </nav>
  );
};

export default Navbar;
