const Card = (props) => {
  if (props.cardNo === '2') {
    return (
      <div className='app-container__card'>
        <img
          src={
            props.secondCard
              ? props.secondCard.image
              : 'https://opengameart.org/sites/default/files/card%20back%20black.png'
          }
          alt=''
        />
      </div>
    );
  } else if (props.cardNo === '1') {
    return (
      <div className='app-container__card'>
        <img
          src={
            props.recentCard
              ? props.recentCard.image
              : 'https://opengameart.org/sites/default/files/card%20back%20black.png'
          }
          alt=''
        />
      </div>
    );
  }
};

export default Card;
