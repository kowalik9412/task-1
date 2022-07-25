import { useState } from 'react';

const Button = (props) => {
  const [isGettingNewCard, setIsGettingNewCard] = useState(false);
  const [canDraw, setCanDraw] = useState(true);

  // Fetch new card
  const clickHandler = () => {
    setIsGettingNewCard(true);
    const url = `https://deckofcardsapi.com/api/deck/${props.deckId}/draw/?count=1`;

    if (props.cardCounter === 52) {
      setCanDraw(false);
    } else {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const fetchedCard = data.cards[0];
          const card = {
            value: fetchedCard.value,
            suit: fetchedCard.suit,
            image: fetchedCard.image,
          };
          props.onButtonClickHandler(card);
          props.checkMessagesHighlighted();
          setIsGettingNewCard(false);
        })
        .catch();
    }
  };

  return (
    <div>
      {canDraw && (
        <button
          disabled={isGettingNewCard}
          onClick={clickHandler}
          className='App-button'>
          {isGettingNewCard ? 'Loading...' : 'Draw Card'}
        </button>
      )}
    </div>
  );
};
export default Button;
