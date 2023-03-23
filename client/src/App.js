import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Header from './components/header.component';
import Auth from './components/Auth';
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/main' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
