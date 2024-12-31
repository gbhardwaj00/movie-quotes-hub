import React from "react";
import './Header.css';

const Header = () => (
    <header>
      <h1>Movie Quotes Hub</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/add-quote">Add Quote</a>
      </nav>
    </header>
  );

export default Header;