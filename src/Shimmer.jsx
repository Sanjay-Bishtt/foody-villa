import React from 'react';

export const Shimmer = () => {
  // Render multiple shimmer cards to mimic loading restaurant cards
  return (
    <div className="shimmer-container">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-text title"></div>
          <div className="shimmer-text subtitle"></div>
          <div className="shimmer-text subtitle"></div>
        </div>
      ))}
    </div>
  );
};
