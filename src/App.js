import React from 'react'
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom'
import { CartWidget } from './components/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


export const App = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <ItemListContainer />

      </Router>

    </div>
  )
}



export default App;
