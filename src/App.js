import React from 'react'
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';







export const App = () => {
  return (

    <>

      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/detalle' element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>

    </>

  )
}



export default App;
