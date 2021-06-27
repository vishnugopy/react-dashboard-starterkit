import React, {useContext} from 'react';
import NavBar from './components/NavBar';
import Footer from './pages/partials/Footer';
import './assets/App.scss';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';
import { appStore } from './store';

const App = () => {
  const store = useContext(appStore);
  document.body.style.backgroundColor = store.theme.body;
  document.body.style.color = store.theme.color;

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
