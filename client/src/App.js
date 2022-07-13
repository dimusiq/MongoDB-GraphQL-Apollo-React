import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import HomePage from './pages/HomePage';

import Header from './components/header.component';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/main' element={<Main />} />
          {/* <Route path='/' element={<TodoList/>}/> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
