import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoItem) => {
    setTodoList((prev) => [...prev, todoItem]);
  };

  const deleteTodo = (index) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index));
  };

  const updateTodoStatus = (index, newStatus) => {
    setTodoList((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todoList, addTodo, deleteTodo, updateTodoStatus }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
