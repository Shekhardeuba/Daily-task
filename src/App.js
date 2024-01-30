import React from 'react';
import Header from './Components/Header';
// import Home from './Components/Home';
import "./App.css";
import Dashboard from './pages/dashboard';

const App = () => {
  return (
    <>
   <Header />
   <Dashboard />
   {/* <Home /> */}
    </>
  )
}

export default App