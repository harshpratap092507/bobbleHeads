import { Giftprod } from '../../ulits/GiftData.jsx';
import Giftproduct from './Giftproduct';
import './Gift.css';

const Gift = () => {
  
  console.log(Giftprod[0].id);
  return (
    <>
    <h2 className='gift-heading'>Gift</h2>
    <div className='gift-container'>
      
      {Giftprod.map((data,index)=><Giftproduct  giftdetail={data} key={index}/>)}
  
      </div>
      </>
  )
}

export default Gift
