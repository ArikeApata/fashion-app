const Products = ({ products }) => {
  return (
    <div className="products ">
      {products?.map((product) => {
        const { id, image, title, price } = product;
        return (
          <div className="product-preview" key={id}>
            <img src={image} alt="" className="product-image img-fluid mb-3" />
            <div className="product-description">
              <p>{title}</p>
              <p>Price: {price}</p>
              <span
                className="add-to-basket"
                //   onClick={() => addToCart(product)}
              >
                {/* <BsFillCartPlusFill /> */}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
