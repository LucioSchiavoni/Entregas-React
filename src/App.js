import React from 'react'
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer';





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
