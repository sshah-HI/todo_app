import HeaderButton from "./headerButton";

const Header = ({ searchTerm, handleSearch }) => {
  return (
    <header>
      <nav className="d-flex p-2 navbar navbar-light bg-light">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder={searchTerm}
            onChange={handleSearch}
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
        {/* <a className="nav-link">
          <img src="https://picsum.photos/200/100" alt="Logo" />
        </a> */}
        <HeaderButton name="Done" className={"btn btn-success"} />
        <HeaderButton name="Pending" className={"btn btn-warning"} />
        <HeaderButton name="Overdue" className={"btn btn-danger"} />
      </nav>
    </header>
  );
};

export default Header;
