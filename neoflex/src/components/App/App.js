import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Basket from '../Basket/Basket';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/basket' element={<Basket />}/>
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
