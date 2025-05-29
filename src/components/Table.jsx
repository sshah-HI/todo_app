import React from "react";
import TodoCard from "./TodoCard";

const Table = () => {
  return (
    <table
      className="table table-striped table-hover"
      style={{ tableLayout: "fixed", width: "100%" }}
    >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Due Date</th>
          <th scope="col">Due Time</th>
          <th className="text-center" scope="col">
            Complete
          </th>
          <th className="text-center" scope="col">
            Edit
          </th>
          <th className="text-center" scope="col">
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        <TodoCard
          number="1"
          note="First test note"
          date="12-11-2025"
          time="11:00"
          className="align-middle"
          status="table-warning"
        />
        <TodoCard
          number="2"
          note="Second test note"
          date="12-11-2025"
          time="11:00"
          className="align-middle"
          status="table-success"
        />
        <TodoCard
          number="3"
          note="Third test note"
          date="12-11-2025"
          time="11:00"
          className="align-middle"
          status="table-danger"
        />
      </tbody>
    </table>
  );
};

export default Table;
