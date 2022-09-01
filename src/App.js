import React from 'react'
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { CartWidget } from './components/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';

export const App = () => {
  return (
    <div>
      <Router>
        <NavBar>
          <CartWidget />
        </NavBar>
        <ItemListContainer />
      </Router>

    </div>
  )
}



export default App;
