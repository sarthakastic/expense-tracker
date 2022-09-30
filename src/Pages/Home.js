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
import { AuthContextProvider } from '../Context/AuthContext';
import Protected from './Protected';
import { UserAuth } from '../Context/AuthContext';

const Home = () => {
  const user = UserAuth();
  return (
    <>
    <AuthContextProvider>
      
    <Router>

    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Landing/> }/>
        </Routes>
        
        <Routes>
          <Route path='/join' element={ < SignIn /> }/>
        </Routes>
        <Routes>
          <Route path='/account' element={ < Protected /> }/>
        </Routes>
    </div>
    </Router>
    </AuthContextProvider>
    </>
  )
}

export default Home