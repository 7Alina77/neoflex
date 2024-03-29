import './Basket.css';
import BasketCard from '../BasketCard/BasketCard';
import BasketTotal from '../BasletTotal/BasketTotal';
import { connect } from 'react-redux';

function Basket({basket}) {

  return (
    <main className='basket'>
      <h2 className='basket__title'>Корзина</h2>
      <div className='basket__content'>
        <div className='basket__cards'>
          {basket.length > 0 &&
          basket.map((card, index) => {
            return <BasketCard card={card} key={index}/>
          })}
        </div>
        <BasketTotal />
      </div>
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket 
  };
};

export default connect(mapStateToProps)(Basket);
