import React from 'react'
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Nosotros } from './pages/Nosotros';
import { Contacto } from './pages/Contacto';
import { CartContext } from './components/CartContext';







export const App = () => {
  return (

    <>

      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/pages/Nosotros' element={<Nosotros />} />
          <Route path='/pages/Contacto' element={<Contacto />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/CartContext' element={<CartContext />} />
        </Routes>

      </BrowserRouter>

    </>

  )
}



export default App;
