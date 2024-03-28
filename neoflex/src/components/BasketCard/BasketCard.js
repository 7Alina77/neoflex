import { useDispatch } from 'react-redux';
import './BasketCard.css';
import { removeFromBasket } from '../redux/actions/actions';

function BasketCard({card}) {
  const dispatch = useDispatch();

  const onDelete = (card) => {
    dispatch(removeFromBasket(card));
  }

  return (
    <section className='basket-card'>
      <div className='basket-card__left-column'>
        <div className='basket-card__image-wrapper'>
          <img src={card.img} alt='item' className='basket-card__image'/>
        </div>
        <div className='basket-card__counter'>
          <button className='basket-card__minus link'>-</button>
          <p className='basket-card__counter-count'>1</p>
          <button className='basket-card__plus link'>+</button>
        </div>
      </div>
      <div className='basket-card__center-column'>
        <h2 className='basket-card__title'>{card.title}</h2>
        <p className='basket-card__price'>{card.priceNow} ₽</p>
      </div> 
      <div className='basket-card__right-column'>
        <button onClick={() => onDelete(card)} className='basket-card__delete-btn link'></button>
        <p className='basket-card__total-price'>{card.priceNow} ₽</p>
      </div>     
    </section>
  )
}

export default BasketCard;