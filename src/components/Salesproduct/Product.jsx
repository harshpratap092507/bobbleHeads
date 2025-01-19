const Product = (props) => {
  const { category, img, description, price, offerPrice } = props.detail;

  return (
    <div className="product">
      <div className="product_img_div">
        <img src={img} alt="chair img" className="product_img" />
      </div>
      <div className="product_detail">
        {/* <p className="type">{category}</p> */}
        <p className="name">{description}</p>
        <div className="priceDiv">
          <p className="price"> {`Rs:${price}`} </p>
          <p className="offerPrice"> {`Rs:${offerPrice}`} </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
