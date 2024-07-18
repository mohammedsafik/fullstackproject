import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Userprofile.css';

const Card = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    // Function to fetch user profile data from backend
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3001/send'); // Your API endpoint to fetch user profile data
        const userData = response.data;

        // Update component state with fetched user data
        setName(userData.name);
        setAge(userData.age);
        setHeight(userData.height);
        setWeight(userData.weight);
        setUpdated(true); // Set updated flag to true to display user data
      } catch (error) {
        console.error('Error fetching user profile data:', error);
        // Handle error (e.g., show error message)
      }
    };

    fetchUserProfile(); // Call the fetchUserProfile function when component mounts
  }, []); // Empty dependency array to run this effect only once on mount

  return (
    <div className="profile-card" style={{backgroundColor:"#E1F7F5"}}>
      <div className="info">

        <label htmlFor="name" style={{marginTop:"20px"}}>Name:<span>{name}</span></label>
        

        <label htmlFor="age" style={{marginTop:"20px"}}>Age: <span>{age}</span></label>
       

        <label htmlFor="height"style={{marginTop:"20px"}}>Height (cm):<span>{height}</span></label>
        

        <label htmlFor="weight"style={{marginTop:"20px"}}>Weight (kg):<span>{weight}</span></label>
        
      </div>

      {/* {updated && ( // Render updated profile information if updated flag is true
        <div className="updated-info">
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Height: {height} cm</p>
          <p>Weight: {weight} kg</p>
        </div>
      )} */}
    </div>
  );
};

export default Card;
