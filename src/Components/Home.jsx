import { AiOutlineArrowRight } from "react-icons/ai";
import { BiChevronsDown } from "react-icons/bi";
import Featured from "./Featured";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Home = ({products}) => {
  return (
    <div className="home">
      <Navbar />
      <div className="container-fluid promotion mb-2">
        <h6>New arrivals this summer</h6>
        <div className="promotion-link">
          <a className="" href="/shop">
            Shop now
          </a>
        </div>
      </div>
      <div className="banner bg-img img-fluid mb-2">
        <img src="/images/newww.jpg" alt="" className="img-fluid" />
        <div className="banner-content p-3">
          <div className="inner-banner">
            <div className="banner-text-desktop container-fluid mb-3">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt tempore omnis quisquam cum. Aperiam ab quidem veritatis
                modi quas praesentium, laborum nulla natus illum, quo vero iusto
                in dicta delectus.
              </p>
            </div>
            <div className="banner-text-mobile container-fluid text-light">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
                aliquid!
              </p>
            </div>
            <div className="promotion-buttons container-fluid ">
              <div className="shop mb-2">
                <button className="btn btn-bg-light">
                  Shop new arrivals
                  <span className="arrow-left">
                    <AiOutlineArrowRight />
                  </span>
                </button>
              </div>
              <div className="explore">
                <button className="btn btn-bg-tertiary">
                  See more
                  <span className="scroll-icon">
                    <BiChevronsDown />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2 container-fluid featured" id="featured">
        <div className="featured-caption justify-content-between align-end d-flex">
          <div className="trend-buttons">
            <button className="new btn bg-dark text-light p-1">
              New Arrivals
            </button>
            <button className="trending btn bg-tertiary p-1">
              What's Trending
            </button>
          </div>
          <div className="view">
            <Link className="text-dark" to="/featured">
              View All
            </Link>
          </div>
        </div>
        <Featured products={products} />
      </div>
    </div>
  );
};

export default Home;
