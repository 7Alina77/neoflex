import './Cards.css';

function Cards({title}) {
  return (
    <section className='cards'>
      <h2 className='cards__title'>{title}</h2>
    </section>
  )
}

export default Cards;