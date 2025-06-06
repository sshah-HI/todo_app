import { rowGreen, rowYellow } from "../styles/colors";
import HeaderButton from "./headerButton";

const Header = ({
  todoList,
  setFilteredTodos,
  searchStatus,
  setSearchStatus,
  doneFilterStatus,
  setDoneFilterStatus,
  pendingFilterStatus,
  setPendingFilterStatus,
  setFilteredStatus,
}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.value;
    const nextPending = pendingFilterStatus;
    const nextDone = doneFilterStatus;
    const isSearching = term.length > 0;
    setSearchStatus(isSearching);
    const filtered = todoList
      .filter((todo) => todo.todo.toLowerCase().includes(term.toLowerCase()))
      .filter((todo) => {
        if (nextDone && !nextPending) return todo.status === rowGreen;
        if (nextPending && !nextDone) return todo.status === rowYellow;
        return true;
      });
    setFilteredTodos(filtered);
    setFilteredStatus(nextDone || nextPending || searchStatus);
  };

  const Done = () => {
    const nextPending = false;
    const nextDone = !doneFilterStatus;

    if (pendingFilterStatus === true) {
      setPendingFilterStatus(nextPending);
    }

    const filtered = todoList.filter((todo) => todo.status === rowGreen);
    setFilteredTodos(filtered);
    setDoneFilterStatus(nextDone);

    setFilteredStatus(nextDone || nextPending);
  };

  const Pending = () => {
    const nextDone = false;
    const nextPending = !pendingFilterStatus;

    if (doneFilterStatus === true) {
      setDoneFilterStatus(nextDone);
    }

    const filtered = todoList.filter((todo) => todo.status === rowYellow);
    setFilteredTodos(filtered);
    setPendingFilterStatus(nextPending);

    setFilteredStatus(nextDone || nextPending); // use the intended next values
  };

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark px-2">
        <div className="container-fluid px-2">
          <div className="d-flex justify-content-start align-items-center">
            <div className="d-flex align-items-center">
              <img
                src="/todo.svg"
                alt="Logo"
                className="img-fluid me-2"
                style={{ height: "50px", width: "auto" }}
              />
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  onChange={handleSearch}
                  aria-label="Search"
                />
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2 justify-content-end">
            <HeaderButton
              name="Done"
              className="btn btn-success"
              onClick={Done}
            />
            <HeaderButton
              name="Pending"
              className="btn btn-warning"
              onClick={Pending}
            />
            {/* <HeaderButton name="Overdue" className="btn btn-danger" /> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
