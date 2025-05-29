import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
    <div className="container-fluid g-0">
      <Header search={search} handleSearch={handleSearch} />
      <Navbar setDate={setDate} setTime={setTime} />
      <TodoCard />
    </div>
  );
};

export default App;
