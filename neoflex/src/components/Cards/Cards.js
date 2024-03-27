import Card from '../Card/Card';
import './Cards.css';

function Cards({title, cards}) {

  return (
    <section className='cards'>
      <h2 className='cards__title'>{title}</h2>
      <div className='cards__content'>
      {
        cards.map((card, index) => {
          return <Card card={card} key={index}/>
        })
      }
      </div>
    </section>
  )
}

export default Cards;