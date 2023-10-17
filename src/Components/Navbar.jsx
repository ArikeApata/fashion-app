import { BiSearch } from "react-icons/bi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-expand-lg nav-pad">
      <div className="container-fluid nav-section">
        <div className="first-line-nav ">
          <div className="navbar short-links-nav">
            <div className="short-links">
              <ul className="d-flex float-end">
                <li>
                  <a href="#contact">contact us</a>
                </li>
                <li className="">
                  <a className="" href="#help">
                    help
                  </a>
                </li>
                <li>
                  <a href="/signup">join us</a>
                </li>
                <li>
                  <a href="/signin">sign in</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="second-line-nav">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid navbar-section">
              <div className="navbrand">
                <Link to="/" className="navbar-brand navbrand-logo" href="#">
                  Insert Logo
                </Link>
                {/* <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button> */}
              </div>

              <div
                className="collapse navbar-collapse navbar-action"
                id="navbarSupportedContent"
              >
                <div className="nav-menu">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/shop" className="nav-link">
                        Shop
                      </Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link">Brides</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/trending" className="nav-link" href="#featured">
                        Featured
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/trending" className="nav-link">Trending</Link>
                    </li>
                  </ul>
                </div>

                <div className="nav-help">
                  <form className="d-flex search-input" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn" type="submit">
                      <span>
                        <BiSearch />
                      </span>
                    </button>
                  </form>
                  <button>
                    <span>
                      <AiOutlineUser />
                    </span>
                  </button>
                  <button>
                    <span className="cart-icon">
                      <SlBasket />
                    </span>
                  </button>
                  <button>
                    <span>
                      <AiOutlineHeart />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
