import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { getTodayDate, getTodayTime } from "./utils/dateUtils";
import { rowYellow, rowGreen } from "./styles/colors.js";
import { checkButtonStyle, checkMarkIcon } from "./styles/icons.js";

// todoList = [0:{ key:keyIndex, "todo": todo, "date": date, "time": time,status: 'table-warning', iclassName, completenessclassName }]

const App = () => {
  const todayDate = getTodayDate();
  const todayTime = getTodayTime();

  const [search, setSearch] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(todayDate);
  const [time, setTime] = useState(todayTime);
  const [status, setStatus] = useState(rowYellow);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [doneFilterStatus, setDoneFilterStatus] = useState(false);
  const [pendingFilterStatus, setPendingFilterStatus] = useState(false);
  const [filteredStatus, setFilteredStatus] = useState(false);
  const [i_className, setI_classname] = useState(checkMarkIcon);
  const [completenessclassName, setcompletenessclassName] =
    useState(checkButtonStyle);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    search.map();
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
        i_className={i_className}
        completenessclassName={completenessclassName}
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
