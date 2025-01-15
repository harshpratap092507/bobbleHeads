
const Product = (props) => {
    console.log(props);
    const  {category,img,description,price} =props.detail;
   
  return (
    <div className='product'>
      <div className='product_img'>
     <img src={img} alt='chair img' className='img'/>
     </div>
     <div className='product_detail'>
     <p className='type'>{category}</p>
     <p className='name'>{description}</p>
     <p className='price'> {`Rs:${price}`} </p>
     </div>
    </div>
  )
}

export default Product
