import './Header.css';
import like from '../../images/like.svg';
import cart from '../../images/cart.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Link to={'/'} className='header__main link'>QPICK</Link>
      <div className='header__basket'>
        <Link className='header__item header__like link'><img src={like} alt='liked' className='header__like-img' /></Link>
        <Link className='header__item header__cart link'><img src={cart} alt='cart' className='header__cart-img' /></Link>
      </div>
    </header>
  )
}

export default Header;