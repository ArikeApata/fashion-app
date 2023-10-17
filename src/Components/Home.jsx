import { AiOutlineArrowRight } from "react-icons/ai";
import { BiChevronsDown } from "react-icons/bi";
import Featured from "./Featured";
const Home = ({}) => {
  return (
    <div className="home">
      <div className="container-fluid promotion mb-2">
        <h6>New arrivals this summer</h6>
        <div className="promotion-link">
          <a className="" href="/shop">
            Shop now
          </a>
        </div>
      </div>
      <div className="banner bg-img img-fluid">
        <img src="newww.jpg" alt="" className="img-fluid" />
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
      <div className="container-fluid-medium">
        <Featured />
      </div>
    </div>
  );
};

export default Home;
