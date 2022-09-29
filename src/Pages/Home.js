import React from 'react'
import Landing from '../Componenets/Content/Landing'
import Navbar from '../Componenets/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignIn from '../Componenets/Content/SignIn';

const Home = () => {
  return (
    <>
    <Router>

    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Landing/> }/>
        </Routes>
        
        <Routes>
          <Route path='/join' element={ < SignIn /> }/>
        </Routes>
    </div>
    </Router>
    </>
  )
}

export default Home