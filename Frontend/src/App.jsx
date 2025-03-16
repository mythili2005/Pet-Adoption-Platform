import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react';
import SignUp from './Components/auth/SignUp';
import LogIn from './Components/auth/Login';
import Home from './Components/pages/Home/Home';
function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Home /> } />
            <Route path = "/signup" element={<SignUp /> } />
            <Route path = '/login' element ={<LogIn />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
