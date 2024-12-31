import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import AddQuote from './components/AddQuote/AddQuote.jsx'
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-quote" element={<AddQuote />} />
      </Routes>
    </Router>
  );
}

export default App
