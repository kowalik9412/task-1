import './App.css';

import { useEffect, useState } from 'react';

import Card from './components/Card';
import Messages from './components/Messages';
import Button from './components/Button';

function App() {
  const [deckId, setDeckId] = useState('');
  const [cardCounter, setCardCounter] = useState(0);
  const [recentCard, setRecentCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [valueCounter, setValueCounter] = useState(0);
  const [suitCounter, setSuitCounter] = useState(0);
  const [isSnapValue, setIsSnapValue] = useState(false);
  const [isSuitValue, setIsSuitValue] = useState(false);

  // Handle "Draw Card" button clicks
  const onButtonClickHandler = (card) => {
    setCardCounter(cardCounter + 1);
    setRecentCard(card);
    setSecondCard(recentCard);
    checkValues(recentCard, card);
  };

  // Check and reset messages states on each move
  const checkMessagesHighlighted = () => {
    if (isSuitValue) {
      setIsSuitValue(false);
    } else if (isSnapValue) {
      setIsSnapValue(false);
    }
  };

  // Validate cards
  const checkValues = (card1, card2) => {
    if (card1 != null) {
      if (card2.suit === card1.suit && card2.value === card1.value) {
        setValueCounter(valueCounter + 1);
        setSuitCounter(suitCounter + 1);
        setIsSnapValue(true);
        setIsSuitValue(true);
      } else if (card2.value === card1.value) {
        setValueCounter(valueCounter + 1);
        setIsSnapValue(true);
      } else if (card2.suit === card1.suit) {
        setSuitCounter(suitCounter + 1);
        setIsSuitValue(true);
      }
    }
  };

  // Fetch new deck each time app loads
  useEffect(() => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDeckId(data.deck_id);
      })
      .catch();
  }, []);

  return (
    <div className='App'>
      <div className='app-container'>
        <Card secondCard={secondCard} cardNo='2'></Card>
        <Messages
          valueCounter={valueCounter}
          suitCounter={suitCounter}
          isSnapValue={isSnapValue}
          isSuitValue={isSuitValue}
          cardCounter={cardCounter}></Messages>
        <Card recentCard={recentCard} cardNo='1'></Card>
      </div>
      <Button
        onButtonClickHandler={onButtonClickHandler}
        checkMessagesHighlighted={checkMessagesHighlighted}
        deckId={deckId}
        recentCard={recentCard}
        secondCard={secondCard}
        cardCounter={cardCounter}></Button>
    </div>
  );
}

export default App;
