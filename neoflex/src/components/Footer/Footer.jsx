/* eslint-disable jsx-a11y/anchor-has-content */
import './Footer.css';
import { Link } from 'react-router-dom';
import language from '../../images/language.svg';
import vk from '../../images/VK.svg';
import tg from '../../images/Telegram.svg';
import wa from '../../images/Whatsapp.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <Link to={'/'} className='footer__main link'>QPICK</Link>
        <div className='footer__navigation'>
          <nav>
            <ul className='footer__nav'>
              <li className='footer__nav-item link'><Link to={"/liked"} className='footer__item link'>Избранное</Link></li>
              <li className='footer__nav-item link'><Link to={"/basket"} className='footer__item link'>Корзина</Link></li>
              <li className='footer__nav-item link'><Link to={"/contacts"} className='footer__item link'>Контакты</Link></li>
            </ul>
          </nav>
          <div className='footer__settings'>
            <Link to={'#'} className='footer__terms link'>Условия сервиса</Link>
            <div className='footer__sett'>
              <img alt='language' src={language} className='footer__image' />
              <ul className='footer__languages'>
                <li className='footer__language footer__language_type_active link'>Рус</li>
                <li className='footer__language link'>Eng</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer__social'>
          <ul className='footer__icons'>
            <li className='footer__icon link'><a href="https://vk.com/feed" className='footer__image link'><img src={vk} alt='vk' className='footer__vk'/></a></li>
            <li className='footer__icon link'><a href="https://web.telegram.org/" className='footer__image link'><img src={tg} alt='tg' className='footer__tg'/></a></li>
            <li className='footer__icon link'><a href={"https://www.whatsapp.com"} className='footer__image link'><img src={wa} alt='wa' className='footer__wa'/></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;