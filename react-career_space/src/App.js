import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import AboutUs from './views/aboutUs';
import Home from './views/home';
import Jobs from './views/jobs';
import Landing from './views/landing';
import Login from './views/login';
import Register from './views/register';


function App() {
  return (

    <div className="App">
     <BrowserRouter>
      <Navbar />
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/landing" element={<Landing />} />
          <Route exact path="/jobs" element={<Jobs/>} />

        </Routes>
      <Footer />
    </BrowserRouter>


    </div>
  );
}

export default App;
