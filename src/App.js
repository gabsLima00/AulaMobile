import React, { useState } from 'react';
import Saudacao from './Saudacao';
import Card from './Card';
import './App.css';

const cardTypes = ['🍎', '🍊', '🍇', '🍉', '🍓', '🍌'];
const generateCards = () => {
  const cards = [];
  cardTypes.forEach(type => {
    cards.push({ id: `${type}-1`, type, flipped: false });
    cards.push({ id: `${type}-2`, type, flipped: false });
  });
  return cards.sort(() => Math.random() - 0.5);
};

function App() {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [message, setMessage] = useState("Clique em um card para começar o jogo!");

  const handleClick = (id) => {
    const newCards = cards.map(card => {
      if (card.id === id) {
        return { ...card, flipped: !card.flipped };
      }
      return card;
    });
    setCards(newCards);

    const flipped = newCards.filter(card => card.flipped && !flippedCards.includes(card.id));
    if (flipped.length === 2) {
      if (flipped[0].type === flipped[1].type) {
        setFlippedCards([...flippedCards, ...flipped.map(card => card.id)]);
        setMessage("Parabéns, você encontrou um par!");
      } else {
        setTimeout(() => {
          setCards(cards.map(card => (flipped.includes(card) ? { ...card, flipped: false } : card)));
          setMessage("Tente novamente!");
        }, 1000);
      }
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Jogo da Memória</h1>
      </header>
      <main>
        <Saudacao nome="Jogador" mensagem={message} />
        <div className="card-grid">
          {cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              type={card.type}
              flipped={card.flipped}
              handleClick={handleClick}
            />
          ))}
        </div>
      </main>
      <footer className="app-footer">
        <p>me salva ae professor</p>
      </footer>
    </div>
  );
}

export default App;