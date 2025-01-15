import { Link,useNavigate } from 'react-router-dom';
import './Header.css';
import Search from '../Search/Search';

const Header = () => {
const naviagte=useNavigate();
  

  return (
    <header>
      <div className="free-shipping">
        Free shipping on order above Rs. 999 on prepaid payment
      </div>
      <div className='nav-container'>
       <div className="logo-container">
       <img src='https://www.chumbak.com/cdn/shop/files/9-1.png?v=1693220644&width=400' alt='website-logo'/>
      </div>
     
      
      <nav className='nav'>
      <Link to ="/" className='links'>     <p> Sale</p> </Link>
     <Link to='/gift' className='links'> <p >Gift store</p>  </Link>
        <p>Home &Decor</p>
        <p>Bags&Travel</p>
        <p>Watches</p>
        <p>Collections</p>
      </nav>
      <Search/>
      <div className='cart'>Cart</div>
      </div>
    </header>
  )
}

export default Header
