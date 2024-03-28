import './Header.css';
import like from '../../images/like.svg';
import cart from '../../images/cart.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

function Header({totalItems}) {
  
  return (
    <header className='header'>
      <Link to={'/'} className='header__main link'>QPICK</Link>
      <div className='header__basket'>
        <Link className='header__item header__like link'><img src={like} alt='liked' className='header__like-img' /></Link>
        <Link to={'/basket'} className='header__item header__cart link'><img src={cart} alt='cart' className='header__cart-img' /></Link>
        {totalItems > 0 &&
          <p className='header__count'>{totalItems}</p>
        }
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    totalItems: state.totalItems 
  };
};

export default connect(mapStateToProps)(Header);