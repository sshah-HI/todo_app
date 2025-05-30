import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { getTodayDate, getTodayTime } from "./utils/dateUtils";
import { tableYellow } from "./styles/colors.js";

// todoList = [0:{ key:keyIndex, "todo": todo, "date": date, "time": time,status: 'table-warning' }]

const App = () => {
  const todayDate = getTodayDate();
  const todayTime = getTodayTime();

  const [search, setSearch] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(todayDate);
  const [time, setTime] = useState(todayTime);
  const [status, setStatus] = useState(tableYellow);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [doneFilterStatus, setDoneFilterStatus] = useState(false);
  const [pendingFilterStatus, setPendingFilterStatus] = useState(false);
  const [filteredStatus, setFilteredStatus] = useState(false);

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
      <Header
        search={search}
        handleSearch={handleSearch}
        todoList={todoList}
        doneFilterStatus={doneFilterStatus}
        setDoneFilterStatus={setDoneFilterStatus}
        pendingFilterStatus={pendingFilterStatus}
        setPendingFilterStatus={setPendingFilterStatus}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
        filteredStatus={filteredStatus}
        setFilteredStatus={setFilteredStatus}
      />
      <Navbar
        todo={todo}
        setTodo={setTodo}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        status={status}
        setStatus={setStatus}
        addTodoList={addTodoList}
      />
      <Table
        todoList={todoList}
        setTodoList={setTodoList}
        status={status}
        setStatus={setStatus}
        filteredStatus={filteredStatus}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;
