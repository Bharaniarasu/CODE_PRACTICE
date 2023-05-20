import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // console.log("Triggered..........")
  const navigate=useNavigate();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Logo
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          type="button"
          data-bs-target="#myNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="myNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/men">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/women">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/jewellery">
                Jewellery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/electronics">
                Electronics
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search"
            />
            <button type="button" className="btn btn-primary me-3">
              Search
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/cart")}
            >
              Cart
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
