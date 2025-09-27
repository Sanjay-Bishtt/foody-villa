// components/OfflineGame.jsx
import React, { useState, useEffect } from 'react';

const OfflineGame = () => {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ top: 100, left: 100 });

  const moveBall = () => {
    const newTop = Math.floor(Math.random() * 400);
    const newLeft = Math.floor(Math.random() * 600);
    setPosition({ top: newTop, left: newLeft });
  };

  const handleClick = () => {
    setScore(score + 1);
    moveBall();
  };

  useEffect(() => {
    const interval = setInterval(moveBall, 1500); // Move every 1.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '700px',
        height: '500px',
        border: '2px solid #333',
        margin: 'auto',
        marginTop: '50px',
        backgroundColor: '#f0f0f0',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>🎯 Catch the Ball - Score: {score}</h2>
      <div
        onClick={handleClick}
        style={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'tomato',
          top: position.top,
          left: position.left,
          cursor: 'pointer',
          transition: 'top 0.3s, left 0.3s',
        }}
      />
    </div>
  );
};

export default OfflineGame;
