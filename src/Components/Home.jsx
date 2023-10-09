import { AiOutlineArrowRight } from "react-icons/ai";
import { BiChevronsDown } from "react-icons/bi"
const Home = () => {
  return (
    <div className="home">
      <div className="promotion">
        <h6>New arrivals this summer</h6>
        <div className="promotion-link">
          <a className="" href="/shop">Shop now</a>
        </div>
      </div>
      <div className="banner bg-img">
        <div className="banner-content">
          <div className="banner-text mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            tempore omnis quisquam cum. Aperiam ab quidem veritatis modi quas
            praesentium, laborum nulla natus illum, quo vero iusto in dicta
            delectus.
          </div>
          <div className="promotion-buttons">
            <div className="shop mb-3">
              <button className="btn btn-bg-light">
                Shop new arrivals
                <span className="arrow-left">
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
            <div className="explore">
              <button className="btn btn-bg-tertiary">See more
              <span className="scroll-icon"><BiChevronsDown/></span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
