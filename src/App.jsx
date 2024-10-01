import { useState } from 'react';
import info from './info-cards.js';
import './App.css';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const cardSetTitle = "SQL Flashcards";
  const cardSetDescription = "Learn the basics of SQL commands and clauses.";
  const totalCards = info.length;

  const handleCardClick = () => {
    setShowAnswer((prev) => !prev);
  };

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * totalCards);
    setCurrentCardIndex(randomIndex);
    setShowAnswer(false); // Reset to show question
  };

  const currentCard = info[currentCardIndex];
  const displayContent = showAnswer ? currentCard.answer : currentCard.question;

  return (
    <div className="App">
      <header className="header">
        <h1>{cardSetTitle}</h1>
        <p>{cardSetDescription}</p>
        <p>Total Cards: {totalCards}</p>
      </header>
      <div className="card" onClick={handleCardClick}>
        <p>{displayContent}</p>
      </div>
      <div className="controls">
        <button onClick={handleNextCard}>Next Card</button>
      </div>
    </div>
  );
}

export default App;
