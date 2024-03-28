import { connect } from 'react-redux';
import './BasketTotal.css';

function BasketTotal({totalPrice}) {

  return (
    <section className='basket-total'>
      <div className='basket-total__content'>
        <p className='basket-total__total'>Итого:</p>
        <p className='basket-total__sum'>₽ {totalPrice}</p>
      </div>
      <button className='basket-total__btn link'>Перейти к оформлению</button>   
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.totalPrice 
  };
};

export default connect(mapStateToProps)(BasketTotal);