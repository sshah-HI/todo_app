import React from "react";
import TodoCard from "./TodoCard";
import { tableGreen, tableYellow } from "../styles/colors";

const Table = ({
  todoList,
  setTodoList,
  status,
  setStatus,
  filteredStatus,
  filteredTodos,
}) => {
  function handleDelete(index) {
    setTodoList((prev) => prev.filter((_, i) => i !== index));
  }

  function changeStatus(index) {
    setTodoList((prev) =>
      prev.map((obj, i) =>
        i === index
          ? {
              ...obj,
              status: obj.status === tableGreen ? tableYellow : tableGreen,
            }
          : obj
      )
    );
  }

  return (
    <table
      className="table table-striped table-hover"
      style={{ tableLayout: "fixed", width: "100%" }}
    >
      <thead>
        <tr>
          <th style={{ width: "40px" }} scope="col">
            #
          </th>
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
        {filteredStatus === true
          ? filteredTodos.map((todo, index) => {
              return (
                <TodoCard
                  key={todo.key}
                  number={index + 1}
                  todo={todo.todo}
                  date={todo.date}
                  time={todo.time}
                  className="align-middle"
                  status={status}
                  setStatus={setStatus}
                  todoList={todoList}
                  changeStatus={() => changeStatus(todo.key)}
                  onDelete={() => handleDelete(todo.key)}
                />
              );
            })
          : todoList.map((todo, index) => {
              return (
                <TodoCard
                  key={todo.key}
                  number={index + 1}
                  todo={todo.todo}
                  date={todo.date}
                  time={todo.time}
                  className="align-middle"
                  status={status}
                  setStatus={setStatus}
                  todoList={todoList}
                  changeStatus={() => changeStatus(todo.key)}
                  onDelete={() => handleDelete(todo.key)}
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
