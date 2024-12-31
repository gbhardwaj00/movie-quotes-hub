import React, { useState } from 'react';
import './AddQuote.css';

const AddQuote = () => {
  const [quote, setQuote] = useState('');
  const [movie, setMovie] = useState('');
  const [character, setCharacter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ quote, movie, character }); // Replace with API call later
  };

  return (
    <div className='add-quote'>
      <h2>Add a New Quote</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Quote:
          <input type="text" value={quote} onChange={(e) => setQuote(e.target.value)} required />
        </label>
        <label>
          Movie:
          <input type="text" value={movie} onChange={(e) => setMovie(e.target.value)} required />
        </label>
        <label>
          Character:
          <input type="text" value={character} onChange={(e) => setCharacter(e.target.value)} required />
        </label>
        <button type="submit">Add Quote</button>
      </form>
    </div>
  );
};

export default AddQuote;
