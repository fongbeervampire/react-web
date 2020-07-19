import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Header/>
      
      <Home/>
      <About/>
      <Profile/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
