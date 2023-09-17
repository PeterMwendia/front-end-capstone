import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import bruschettaImage from '../img/bruschetta.png';
import greekSaladImage from '../img/greek-salad.png';
import lemonDessertImage from '../img/lemon-dessert.png';
import './index.css';

const About = () => {
  return (
    <div className="container about-us">
      <FontAwesomeIcon icon={faUtensils} size="3x" />
      <h2>About Little Lemon Restaurant</h2>
      <p>
        Welcome to Little Lemon Restaurant, where we serve delicious and freshly prepared meals
        to tantalize your taste buds. Our chefs are passionate about creating delightful dishes
        using the finest ingredients, ensuring a memorable dining experience for all our guests.
      </p>
      <div className="image-container">
        <div className="image-item">
          <img src={bruschettaImage} alt="Bruschetta" />
          <p>Bruschetta</p>
        </div>
        <div className="image-item">
          <img src={greekSaladImage} alt="Greek Salad" />
          <p>Greek Salad</p>
        </div>
        <div className="image-item">
          <img src={lemonDessertImage} alt="Lemon Dessert" />
          <p>Lemon Dessert</p>
        </div>
      </div>
    </div>
  );
};

export default About;
