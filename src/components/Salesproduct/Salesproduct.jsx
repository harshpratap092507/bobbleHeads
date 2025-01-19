import Product from "./Product";
import { items } from "../../ulits/MockData";
import "./Salesproduct.css";
import { Link } from "react-router-dom";

const Salesproduct = () => {
  return (
    <div className="sales-product">
      {/* <h1 className="center">Desi Heads</h1> */}
      <img
        src="./src/assets/images/desiHeadsIcon.png"
        className="bobbleHeadIcon"
      />
      <div className="sales-product-container">
        {items.map((data) => (
          // <Link to={"/products/" + data.id} key={data.id} className="links">
          <Product detail={data} />
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default Salesproduct;
