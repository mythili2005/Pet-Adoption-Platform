import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react';
import SignUp from './Components/auth/SignUp';
import LogIn from './Components/auth/Login';
function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/signup" element={<SignUp /> } />
            <Route path = '/login' element ={<LogIn />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
