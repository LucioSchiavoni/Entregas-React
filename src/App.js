import React from 'react'
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer';






export const App = () => {
  return (

    <>

      <BrowserRouter >
        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />
        </Routes>

      </BrowserRouter>

    </>

  )
}



export default App;
