const Messages = (props) => {
  // Display messages
  const classes = 'app-container__messages';
  {
    if (props.cardCounter === 52) {
      return (
        <div className={classes}>
          <p className='active'>SNAP SUIT POINTS {props.suitCounter}</p>
          <p className='active'>SNAP VALUE POINTS {props.valueCounter}</p>
        </div>
      );
    } else {
      return (
        <div className={classes}>
          <p className={props.isSuitValue === true ? 'active' : ''}>
            SNAP SUIT!
          </p>
          <p className={props.isSnapValue === true ? 'active' : ''}>
            SNAP VALUE!
          </p>
        </div>
      );
    }
  }
};

export default Messages;
