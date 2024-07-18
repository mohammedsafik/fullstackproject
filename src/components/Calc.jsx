import React, { useState } from 'react';
import axios from 'axios';
import './Calc.css'; // Import the CSS file for styles

const CaloriesCalculator = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState(null);
  const [error, setError] = useState('');

  const handleCalculateCalories = async () => {
    try {
      if (!foodName || !quantity) {
        setError('Please enter both food name and quantity');
        return;
      }

      const response = await axios.post('http://localhost:3001/cal', {
        foodName: foodName.toLowerCase(),
        quantity: parseInt(quantity)
      });

      setCalories(response.data.calories);
      setError('');
    } catch (error) {
      setError('Error calculating calories');
      console.error('Error fetching calories:', error);
    }
  };

  const handleFoodNameChange = (e) => {
    setFoodName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className='back'>
    <div className="container">
      <h1>Calories Calculator</h1>
      <div className='form-group'>
        <label htmlFor="foodName">Name:</label>
        <input
          type="text"
          id="foodName"
          value={foodName}
          onChange={handleFoodNameChange}
          placeholder="Enter food name..."
        />
      </div>
      <div className='form-group'>
        <label htmlFor="quantity">Quantity(100mg):</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          placeholder="Enter quantity..."
        />
      </div>
      <button className='butt' onClick={handleCalculateCalories}>Calculate Calories</button>
      
      {calories !== null && (
        <p className="result">
          Total Calories in {quantity*100}mg {foodName}: {calories} kcal
        </p>
      )}
      {error && <p className="error">{error}</p>}
    </div>
    </div>
  );
};

export default CaloriesCalculator;
