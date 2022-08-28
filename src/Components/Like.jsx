import React, { useState } from 'react';
import './Like.css';

const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

const handleClick = () => {
    if (isClicked) {
        setLikes(likes - 1);
    } else {
        setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <div className="button">
        <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
            <span className="likes-counter">{ `Like | ${likes}` }</span>
        </button>
    </div>
  );
};

export default LikeButton;