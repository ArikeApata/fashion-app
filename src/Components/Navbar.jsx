import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar-expand-lg nav-pad">
      <div className="container-fluid nav-section">
        <div className="first-line-nav">
          <div className="nav-list" id="navbarNav">
            <ul className=" nav-ul"></ul>
          </div>
        </div>
        <div className="second-line-nav">
          <div className="brand">
            <a className="navbar-brand" href="#">
              <span className="brand-logo">Tailored+</span>
            </a>
          </div>
          <button
            className="navbar-toggler toggle-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse navbar-menu" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="#feature">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="#">
                  Latest
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="#">
                  Kids
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Blog</a>
              </li>
            </ul>
          </div>
          <div className="d-flex right-nav" role="search">
            <ul className="icons navbar-nav">
              <li className="nav-link">
                <button className="btn search-button pe-1" type="submit">
                  <span>
                    <BiSearch />
                  </span>
                  Search
                </button>
              </li>

              <li className="nav-link">
                <button className="signin-btn btn pe-1" href="/signin">
                  <span>
                    <a href="/sign">
                      <AiOutlineUser />
                    </a>
                  </span>
                  Sign-in
                </button>
              </li>

              <li className="nav-link">
                <button className="btn cart-icon" type="button" href="/cart">
                  <span>
                    <AiOutlineShopping />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
