import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

const App = () => {
  const [search, setSearch] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const addTodoList = (newTodo) => {
    setTodoList((prev) => {
      const updated = [...prev, newTodo];
      console.log("New todoList:", updated);
      return updated;
    });
  };

  return (
    <div className="container-fluid g-0">
      <Header search={search} handleSearch={handleSearch} />
      <Navbar addTodoList={addTodoList} />
      <Table />
    </div>
  );
};

export default App;
