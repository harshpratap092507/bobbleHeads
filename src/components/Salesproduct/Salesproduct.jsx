import Product from "./Product";
import { items } from "../../ulits/MockData";
import  {Giftprod} from '../../ulits/GiftData'
import './Salesproduct.css';
import { Link } from "react-router-dom";


const Salesproduct = () => {

  
   
  return (
    <div className="sales-product">
      <h1 className="center">Top Sales product</h1>
    <div className='sales-product-container'>
      
      
        {items.map((data)=>
       <Link to={"/products/"+data.id} key={data.id} className="links"> 
        <Product detail={data}  />
        </Link>
        )
        }
      
    </div>
    </div>
  )
}

export default Salesproduct
