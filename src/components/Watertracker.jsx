// import React, { useState, useEffect } from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import Waterinputform from './Waterinput';
// import { Link } from "react-router-dom";
// import "./InputForm.css";
// import axios from 'axios';

// const Watertracker = () => {
//   // const [caloriesConsumed, setCaloriesConsumed] = useState(0);
//   // const [calorieGoal, setCalorieGoal] = useState(0); // State to hold calorie goal

//   // // Simulate fetching calorie goal from database
//   // useEffect(() => {
//   //   const fetchCalorieGoal = async () => {
//   //     try {
//   //       const response = await fetch('http://localhost:3001/Limitget');
//   //       const userData = response.data;
//   //       setCalorieGoal(userData.totalWaterIntake);
//   //     } catch (error) {
//   //       console.error('Error fetching calorie goal:', error);
//   //       // Handle error fetching data
//   //     }
//   //   };

//   //   fetchCalorieGoal(); // Fetch calorie goal when component mounts
//   // }, []);


//   const [waterGoal, setWaterGoal] = useState(0);
//     const [waterConsumed, setWaterConsumed] = useState(0);
  
//     useEffect(() => {
//       // Function to fetch water goal from the server
//       const fetchWaterGoal = async () => {
//         try {
//           const response = await axios.get('http://localhost:3001/Limitget'); // Replace :userId with actual user ID
//           if (response.data && response.data.totalWaterIntake) {
//             setWaterGoal(response.data.totalWaterIntake);
//           }
//         } catch (error) {
//           console.error('Error fetching water goal:', error);
//           // Handle error fetching data
//         }
//       };
  
//       fetchWaterGoal(); // Fetch water goal when component mounts
//     }, []);


//     const addCalories = (amount) => {
//           const newCalories =  waterConsumed + amount;
//           setWaterConsumed(newCalories);
//         };
      
//         const handleAddWater = (amount) => {
//           // const newWaterConsumed = waterConsumed + amount;
//           // setWaterConsumed(newWaterConsumed);
//           addCalories(amount.waterGoal);
//         };
      

//   const percentage = (waterConsumed / waterGoal) * 100;

//   return (
//     <div>
//       <div className='cirbar'>
//         <Waterinputform onAddFood={handleAddWater} />
//         <div className='circlebar'>
//           <div style={{ width: '200px', margin: 'auto' }}>
//             <CircularProgressbar
//               value={percentage}
//               text={`${waterConsumed} Litre of ${waterGoal}`}
//               strokeWidth={12}
//               styles={{
//                 path: { stroke: '#ff6347' }, // Progress bar color
//                 text: { fill: '#ff6347', fontSize: '10px' },
//                 // Text color
//               }}
//             />
//           </div>
//           {/* <Link to='/cal' className="btn btn-secondary">CALCULATE</Link> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Watertracker;
// // Watertracker.js

// // import React, { useState, useEffect } from 'react';
// // import { CircularProgressbar } from 'react-circular-progressbar';
// // import 'react-circular-progressbar/dist/styles.css';
// // import Waterinputform from './Waterinput';
// // import axios from 'axios'; // Import axios for HTTP requests
// // import './InputForm.css';

// // const Watertracker = () => {
// //   const [waterGoal, setWaterGoal] = useState(0);
// //   const [waterConsumed, setWaterConsumed] = useState(0);

// //   useEffect(() => {
// //     // Function to fetch water goal from the server
// //     const fetchWaterGoal = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:3001/Limitget'); // Replace :userId with actual user ID
// //         if (response.data && response.data.totalWaterIntake) {
// //           setWaterGoal(response.data.totalWaterIntake);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching water goal:', error);
// //         // Handle error fetching data
// //       }
// //     };

// //     fetchWaterGoal(); // Fetch water goal when component mounts
// //   }, []);

// //   const addCalories = (amount) => {
// //     const newCalories = caloriesConsumed + amount;
// //     setWaterConsumed(newCalories);
// //   };

// //   const handleAddWater = (amount) => {
// //     // const newWaterConsumed = waterConsumed + amount;
// //     // setWaterConsumed(newWaterConsumed);
// //     addCalories(amount.waterGoal);
// //   };

// //   const percentage = (waterConsumed / waterGoal) * 100;

// //   return (
// //     <div>
// //       <div className='cirbar'>
// //         <Waterinputform onAddWater={handleAddWater} />
// //         <div className='circlebar'>
// //           <div style={{ width: '200px', margin: 'auto' }}>
// //             <CircularProgressbar
// //               value={percentage}
// //               text={`${waterConsumed} Litre of ${waterGoal}`}
// //               strokeWidth={12}
// //               styles={{
// //                 path: { stroke: '#ff6347' }, // Progress bar color
// //                 text: { fill: '#ff6347', fontSize: '10px' }, // Text color
// //               }}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Watertracker;
























// import React, { useState, useEffect } from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import Waterinputform from './Waterinput';
// import axios from 'axios';
// import './InputForm.css';

// const Watertracker = () => {
//   const [waterGoal, setWaterGoal] = useState(0);
//   const [waterConsumed, setWaterConsumed] = useState(0);

//   useEffect(() => {
//     const fetchWaterGoal = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/Limitget');
//         if (response.data && response.data.totalWaterIntake) {
//           setWaterGoal(response.data.totalWaterIntake);
//         }
//       } catch (error) {
//         console.error('Error fetching water goal:', error);
//       }
//     };

//     fetchWaterGoal();
//   }, []);

//   const handleAddWater = (data) => {
//     const newWaterConsumed = waterConsumed + data.calories;
//     setWaterConsumed(newWaterConsumed);
//   };

//   const percentage = (waterConsumed / waterGoal) * 100;

//   return (
//     <div className='cirbar'>
//       <Waterinputform onAddFood={handleAddWater} />
//       <div className='circlebar'>
//         <div style={{ width: '200px', margin: 'auto' }}>
//           <CircularProgressbar
//             value={percentage}
//             text={`${waterConsumed} ML of ${waterGoal}`}
//             strokeWidth={12}
//             styles={{
//               path: { stroke: '#006769' },
//               text: { fill: '#006769', fontSize: '10px' },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Watertracker;



import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Waterinputform from './Waterinput';
import axios from 'axios';
import './InputForm.css';

const Watertracker = () => {
  const [waterConsumed, setWaterConsumed] = useState(0);
  const [waterGoal, setWaterGoal] = useState(0);
  

  useEffect(() => {
    const fetchWaterGoal = async () => {
      try {
        const response = await axios.get('http://localhost:3001/Limitget');
        if (response.data && response.data.totalWaterIntake) {
          setWaterGoal(response.data.totalWaterIntake);
        }
      } catch (error) {
        console.error('Error fetching water goal:', error);
      }
    };

    const fetchTotalWaterConsumed = async () => {
      try {
        const response = await axios.get('http://localhost:3001/totalwaterconsumed');
        if (response.data && typeof response.data.totalWaterConsumed === 'number') {
          setWaterConsumed(response.data.totalWaterConsumed);
        }
      } catch (error) {
        console.error('Error fetching total water consumed:', error);
      }
    };
    fetchTotalWaterConsumed();
    fetchWaterGoal();
   
  }, []);

  const handleAddWater = async (data) => {
    try {
      await axios.post('http://localhost:3001/waterquantity', { quantity: data.calories });
      setWaterConsumed(prevWaterConsumed => prevWaterConsumed + data.calories);
    } catch (error) {
      console.error('Error adding water quantity:', error);
    }
  };

  const percentage = (waterConsumed / waterGoal) * 100;

  return (
    <div className='cirbar'>
      <Waterinputform onAddFood={handleAddWater} />
      <div className='circlebar'>
        <div style={{ width: '200px', margin: 'auto' }}>
          <CircularProgressbar
            value={percentage}
            text={`${waterConsumed} ML of ${waterGoal}`}
            strokeWidth={12}
            styles={{
              path: { stroke: '#006769' },
              text: { fill: '#006769', fontSize: '10px' },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Watertracker;

