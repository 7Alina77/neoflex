import './Header.css';
import like from '../../images/like.svg';
import cart from '../../images/cart.svg';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import basketContext from '../../basketContext/basketContext';

function Header() {
  const basketData = useContext(basketContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(basketData.items.length);
  },[basketData, count]);

  return (
    <header className='header'>
      <Link to={'/'} className='header__main link'>QPICK</Link>
      <div className='header__basket'>
        <Link className='header__item header__like link'><img src={like} alt='liked' className='header__like-img' /></Link>
        <Link to={'/basket'} className='header__item header__cart link'><img src={cart} alt='cart' className='header__cart-img' /></Link>
        {count > 0 &&
          <p className='header__count'>{count}</p>
        }
      </div>
    </header>
  )
}

export default Header;