import { useParams } from "react-router-dom";
import './Productdetail.css';
const Productdetail = ({detail}) => {
    const { productId } = useParams();

    //const {}=detail
  return (
    <div className='product-detail'>
      <div className="chumbak-page">
      {/* Header */}
      

      <div className="product-container">
        {/* Left Column - Images */}
        <div className="product-images">
          <div className="thumbnail-nav">
            {/*images.map((img, idx) => (
              <div
                key={idx}
                className={`thumbnail ${selectedImage === idx ? 'selected' : ''}`}
                onClick={() => setSelectedImage(idx)}
              >
             {/*   <img src={img} alt={`Product view ${idx + 1}`} /> }
              </div>
            ))*/}
          </div>

          <div className="main-image">
           IMG {/*
            <img src={images[selectedImage]} alt="Main product view" /> */}
          </div>

        </div>

        {/* Right Column - Product Info */}
        <div className="product-info">
          <div className="breadcrumb">
            Home {'>'} TEAL by Chumbak Forest Jade Watch, Metal link Strap
          </div>

          <h1 className="product-title">
            TEAL by Chumbak Forest Jade Watch, Metal link Strap
          </h1>

          <div className="price-container">
            <span className="current-price">₹1,258</span>
            <span className="original-price">₹2,795</span>
          </div>

          <div className="tax-info">
            Tax included. <a href="#">Shipping calculated</a> at checkout
          </div>

          <div className="bulk-order">
            <div className="bulk-order-content">
              <span className="bulk-title">Order More than 10 products?</span>
              <span className="bulk-text">
                contact us for dedicated support and special pricing
              </span>
            </div>
            <span className="arrow">›</span>
          </div>

          <div className="features">
            <div className="feature">
             {/* <Camera size={24} /> */}
              <span>Free delivery</span>
            </div>
            <div className="feature">
              {/* <Camera size={24} /> */}
              <span>Hassle free Returns</span>
            </div>
            <div className="feature">
             {/* <Camera size={24} /> */}
              <span>Secure payments</span>
            </div>
            <div className="feature">
              {/* <Camera size={24} /> */}
              <span>Cash on delivery</span>
            </div>
          </div>

          <div className="quantity-selector">
            <button >−</button>
            <span>quan</span>
            <button >+</button>
          </div>

          <div className="delivery-check">
            <h3>Delivery Date</h3>
            <div className="pincode-input">
              <input
                type="text"
                placeholder="Enter pincode to check"
                value='pincode'
               
              />
              <button>CHECK</button>
            </div>
            <div className="delivery-message">
              Next day delivery available in select locations!
            </div>
          </div>

          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Productdetail
