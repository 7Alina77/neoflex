import { useContext } from 'react';
import basketContext from '../../basketContext/basketContext';
import './Basket.css';
import BasketCard from '../BasketCard/BasketCard';

function Basket() {
  const basketData = useContext(basketContext);

  return (
    <main className='basket'>
      <h2 className='basket__title'>Корзина</h2>
      <div className='basket__cards'>
        {basketData.items.length > 0 &&
        basketData.items.map((card, index) => {
          return <BasketCard card={card} key={index}/>
        })}
      </div>
    </main>
  )
}

export default Basket;