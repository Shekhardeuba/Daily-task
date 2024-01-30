import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <nav>Daily Goals To Complete</nav>
    <div className="header">
    <Link to = "/Home" >Home</Link>
    <Link to = "/Contact" >Contact</Link>
    <Link to = "/About" >About</Link>
    </div>
    </>
  )
}

export default Header;