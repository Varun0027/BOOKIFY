import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/LS/header';
import Log from './components/LS/ls';
import Product from './components/Product';
import SignUp from './components/LS/Sign';
import Users from './components/LS/User';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Book from './components/Book'
import Footer from './components/LS/Footer'


function App() {
  return (
      <div>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Log/>} />
          <Route path="/sign" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/user" element={<Users/>} />
          <Route path="/home" element={<Navbar/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/Book" element={<Book/>} />
          <Route path="/home" element={<Footer/>} />
        
        </Routes>
    </Router>
      </div>
  );
}

export default App;
