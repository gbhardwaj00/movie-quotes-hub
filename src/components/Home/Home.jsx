import React from 'react';
import './Home.css';

const Home = () => {
  const quotes = [
    { id: 1, quote: "Why so serious?", movie: "The Dark Knight", character: "The Joker" },
    { id: 2, quote: "May the Force be with you.", movie: "Star Wars", character: "Obi-Wan Kenobi" },
  ];

  return (
    <div>
      <h2>Popular Quotes</h2>
      <ul>
        {quotes.map((q) => (
          <li key={q.id}>
            <blockquote>"{q.quote}"</blockquote>
            <p>— {q.character}, <em>{q.movie}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
