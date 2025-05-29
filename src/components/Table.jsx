import React from "react";
import TodoCard from "./TodoCard";

const Table = ({ todoList }) => {
  return (
    <table
      className="table table-striped table-hover"
      style={{ tableLayout: "fixed", width: "100%" }}
    >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">To-Do</th>
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
        {todoList.map((todo, index) => {
          return (
            <TodoCard
              key={index}
              number={index + 1}
              todo={todo.todo}
              date={todo.date}
              time={todo.time}
              className="align-middle"
              status="table-warning"
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

{
  /* <TodoCard
          number="1"
          todo="First test note"
          date="12-11-2025"
          time="11:00"
          className="align-middle"
          status="table-warning"
        />
        <TodoCard
          number="2"
          todo="Second test note"
          date="12-11-2025"
          time="11:00"
          className="align-middle"
          status="table-success"
        />
        <TodoCard
          number="3"
          todo="Third test note"
          date="12-11-2025"
          time="11:00"
          className="align-middle"
          status="table-danger"
        /> */
}
