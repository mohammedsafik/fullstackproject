// import React, { useState } from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import InputForm from './Inputprogressbar';
// import { Link } from "react-router-dom";
// import "./InputForm.css"

// const CalorieTracker = () => {
//   const [caloriesConsumed, setCaloriesConsumed] = useState(0);
//   const calorieGoal = 2000; // Set your daily calorie goal here
 

  



//   const addCalories = (amount) => {
//     const newCalories = caloriesConsumed + amount;
//     setCaloriesConsumed(newCalories);
//   };

//   const handleAddFood = (data) => {
//     addCalories(data.calories);
//   };

//   const percentage = (caloriesConsumed / calorieGoal) * 100;
  

//   return (
//     <div>
//       <div className='bar'>
//        <InputForm onAddFood={handleAddFood} />
//       <div  style={{ width: '200px', margin: 'auto'}}>
//         <CircularProgressbar
//           value={percentage}
//           text={`${caloriesConsumed} calories of ${calorieGoal}`}
//           strokeWidth={12}
//           styles={{
//             path: { stroke: '#ff6347' }, // Progress bar color
//             text: { fill: '#ff6347', fontSize: '8px' },
//             // Text color
//           }}
        
//         />
         
//         {/* <Link to='/cal' className="btn btn-secondary">CALCULATE</Link> */}
//       </div>
//       </div>
//       </div>
    
//   );
// };

// export default CalorieTracker;
// CalorieTracker.js

import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import InputForm from './Inputprogressbar';
import axios from 'axios';
import './InputForm.css';

const CalorieTracker = () => {
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  const [calorieGoal, setCalorieGoal] = useState(0);

  useEffect(() => {
    const fetchCalorieGoal = async () => {
      try {
        const response = await axios.get('http://localhost:3001/Limitgets'); // Replace :userId with actual user ID
        if (response.data && response.data.totalCalories) {
          setCalorieGoal(response.data.totalCalories);
        }
      } catch (error) {
        console.error('Error fetching calorie goal:', error);
        // Handle error fetching data
      }
    };

    const fetchTotalCalConsumed = async () => {
      try {
        const response = await axios.get('http://localhost:3001/totalCalconsumed');
        if (response.data && typeof response.data.totalWaterConsumed === 'number') {
          setCaloriesConsumed(response.data.totalWaterConsumed);
        }
      } catch (error) {
        console.error('Error fetching total water consumed:', error);
      }
    };
    fetchTotalCalConsumed();
    fetchCalorieGoal();
  }, []);



  const handleAddFood = async (data) => {
    // addCalories(data.calories);
    try {
      await axios.post('http://localhost:3001/Calquantity', { quantity: data.calories });
      setCaloriesConsumed(prevWaterConsumed => prevWaterConsumed + data.calories);
    } catch (error) {
      console.error('Error adding water quantity:', error);
    }
  };

  const percentage = (caloriesConsumed / calorieGoal) * 100;

  return (
    <div>
      <div className='bar'>
        <InputForm onAddFood={handleAddFood} />
        <div style={{ width: '200px', margin: 'auto' }}>
          <CircularProgressbar
            value={percentage}
            text={`${caloriesConsumed} calories of ${calorieGoal}`}
            strokeWidth={12}
            styles={{
              path: { stroke: '#ff6347' },
              text: { fill: '#ff6347', fontSize: '8px' },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalorieTracker;



