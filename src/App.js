import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import "./App.css";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
   <BrowserRouter>
   <Header />
<Routes>
   <Route path= "/home" element={<Home />} />
   <Route path= "/contact" element={<Contact />} />
   <Route path= "/About" element={<About />} />
</Routes>
<Footer />
   </BrowserRouter>
    </>
  )
}

export default App