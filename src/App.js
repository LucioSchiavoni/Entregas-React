import React from 'react'
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { CartWidget } from './components/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


export const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <ItemCount stock='15' />
        <CartWidget />
        <ItemListContainer bienvenida="Nuevo usuario" />
        <ItemListContainer bienvenida="Nuevo cliente" />
      </Router>

    </div>
  )
}



export default App;
