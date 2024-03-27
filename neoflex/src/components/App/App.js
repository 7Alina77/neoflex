import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Basket from '../Basket/Basket';
import basketContext from '../../basketContext/basketContext.js';

function App() {
  const basket = {
    totalPrice: null,
    items: [],
  };

  return (
    <basketContext.Provider value={basket}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/basket' element={<Basket />}/>
        </Routes>
        <Footer />
      </div>
    </basketContext.Provider>
  );
}

export default App;
