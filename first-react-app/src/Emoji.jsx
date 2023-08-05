import React, { useState } from 'react'
import './Emoji.css'

const Emoji = () => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prevState) => !prevState);
  };

  return (
    <div>
      <span role="img" aria-label={isHappy ? 'Happy' : 'Sad'}>
        {isHappy ? '😄' : '😢'}
      </span>
      <br />
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;