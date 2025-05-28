import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoCard from "./components/TodoCard";

const App = () => {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("some text");
  const [time, setTime] = useState("10:00");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="main px-2">
      <Header search={search} handleSearch={handleSearch} />
      <Navbar setDate={setDate} setTime={setTime} />
      <TodoCard />
    </div>
  );
};

export default App;
