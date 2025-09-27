// RestaurantCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = ({ data }) => {
  const {
    name,
    avgRating,
    cloudinaryImageId,
    sla
  } = data;

  return (
    <div className="res-card" style={{ backgroundColor: "#B9BDC1", padding: "10px", margin: "10px", borderRadius: "8px" }}>
      <img
        src={IMAGE_BASE_URL + cloudinaryImageId}
        alt={name}
        className="res-image"
        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "4px" }}
      />
      <h3>{name}</h3>
      <h4>Rating: {avgRating} ⭐</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );

};


export default RestaurantCard;
