import './Card.css';
import rating from '../../images/rating.svg';
import { useContext } from 'react';
import basketContext from '../../basketContext/basketContext';
import { calculateTotal } from '../../utils/functions';

function Card({card}) {
  const basketData = useContext(basketContext);
  
  const addToBasket = (card) => {
    basketData.items.push(card);
  };

  return (
    <section className='card'>
      <div className='card__image-wrapper'>
        <img src={card.img} alt='item' className='card__image'/>
      </div>      
      <div className='card__content'>
        <div className='card__naming'>
          <h3 className='card__title'>{card.title}</h3>
          <div className='card__prices'>
            <p className='card__price_type_now'>{card.priceNow} ₽</p>
            {card.priceBefore !== null ? 
            <p className='card__price_type_before'>{card.priceBefore} ₽</p>
            : 
            <p className='card__empty'></p>
            }
          </div>
        </div>
        <div className='card__buy'>
          <div className='card__rating'>
            <div className='card__star-wrapper'>
              <img src={rating} alt='item' className='card__star'/>
            </div> 
            <p className='card__rating'>{card.rate}</p>
          </div>
          <button className='card__btn link' onClick={() => addToBasket(card)}>Купить</button>
        </div>
      </div>
    </section>
  )
}

export default Card;