import { useState } from "react";
import Products from "./Products";

const Featured = ({products}) => {
    const {data, setData} = useState(products)
  return (
    <div className="featured" id="#featured">
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
          <a className="text-dark" href="">
            View All
          </a>
        </div>
      </div>
      <div className="featured-preview">
        {products && (
          <Products  products={data?.slice(2, 6)} />
        )}
      </div>
    </div>
  );
};

export default Featured;
