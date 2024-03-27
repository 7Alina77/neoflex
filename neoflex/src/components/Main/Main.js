import Cards from '../Cards/Cards';
import './Main.css';
import { headphones } from '../../utils/constants';
import { wirelessHeadphones } from '../../utils/constants';

function Main() {
  return (
    <main className='main'>
      <Cards title={"Наушники"} cards={headphones}/>
      <Cards title={"Беспроводные наушники"} cards={wirelessHeadphones}/>
    </main>
  )
}

export default Main;