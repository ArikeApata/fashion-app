import { useState } from "react";
import Products from "./Products";

const Featured = ({products, isLoading, error}) => {
    // const {data, setData} = useState([products])
  return (
    <div className="featured">
      
      <div className="featured-preview">
        {isLoading && <div>Please wait...</div>}
        {products && (
          <Products products={products.slice(0, 6)} />
        )}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default Featured;
