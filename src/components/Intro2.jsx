// import React, { useState } from 'react';
// import axios from 'axios';
// import "./Intro.css"
// import { Link, useNavigate } from 'react-router-dom';

// const CalorieWaterTracker = () => {
//   const [totalCalories, setTotalCalories] = useState('');
//   const [totalWaterIntake, setTotalWaterIntake] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     if(!totalCalories ||!totalWaterIntake){
//       alert("Please all the field");
//     }
//     else{
//     try {
//       // Prepare data object to send to the server
//       const data = {
//         totalCalories,
//         totalWaterIntake
//       };

//       // Send POST request to the backend API endpoint
//       const response = await axios.post('http://localhost:3001/Limit', data);

//       console.log('Data saved:', response.data);
//       setSubmitted(true); // Update state to indicate successful submission
//     } catch (error) {
//       console.error('Error saving data:', error);
//       // Handle error (e.g., show error message to the user)
//     }
//   }
//   };
//   const handleFormSubmits=async()=>{
//     if(!totalCalories ||!totalWaterIntake){
//       alert("Please all the field");
//     }
//     else{
//       navigate('/Home');
//     }
//   }

//   return (
//     <>
//           <h2 style={{fontSize:"36px",marginTop:'70px',marginLeft:"500px"}}>Calorie & Water Intake Tracker</h2>

//     <div className='Total' style={{borderRadius:"8px ",padding:"3px",height:"300px",width:"375px",margintop:"250px"}}>
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <label htmlFor="totalCalories">Total Calories:</label>
//           <input
//           // style={{marginLeft:100}}
//            type='number'
//             id="totalCalories"
//             value={totalCalories}
//             onChange={(e) => setTotalCalories(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="totalWaterIntake">Water Intake (in ml):</label>
//           <input
//                     // style={{marginLeft:10}}
//              type='number'
//             id="totalWaterIntake"
//             value={totalWaterIntake}
//             onChange={(e) => setTotalWaterIntake(e.target.value)}
//             required
//           />
//         </div>
//         <div style={{display:"flex",justifyContent:'center',alignItems:"center",borderColor:'blue'}} >
//         <button type="submit">Save Data</button>
//         </div>
      
//         {/* <a href="/Home" style={{marginTop:"45%",marginLeft:'85%'}}>Continue</a> */}
//       </form>
//       {submitted &&alert('DATA ADDED SUCCESS FULLY')}
      
      
//     </div>
//     <div>
//     {/* <a href="/Home" style={{position:'absolute',display:'flex',bottom:'10%',right:'10%'}}>Continue</a> */}
//     <button
//         style={{
//           position: 'absolute',
//           bottom: '100px',
//           right: '200px',
//           color: 'Black',
//           border: '2px solid green',
//           padding: '10px 20px',
//           textAlign: 'center',
//           textDecoration: 'none',
//           cursor: 'pointer',
//           borderRadius: '5px',
//         }}
//         onClick={handleFormSubmits}
//       >Continue</button>
//     </div>
//     </>
//   );
// };

// export default CalorieWaterTracker;


import React, { useState } from 'react';
import axios from 'axios';
import "./Intro.css";
import { useNavigate } from 'react-router-dom';

const CalorieWaterTracker = () => {
  const [totalCalories, setTotalCalories] = useState('');
  const [totalWaterIntake, setTotalWaterIntake] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!totalCalories || !totalWaterIntake) {
      alert("Please fill all the fields");
    } else {
      try {
        const data = { totalCalories, totalWaterIntake };
        const response = await axios.post('http://localhost:3001/Limit', data);
        console.log('Data saved:', response.data);
        setSubmitted(true);
      } catch (error) {
        console.error('Error saving data:', error);
      }
    }
  };

  const handleFormSubmits = () => {
    if (!totalCalories || !totalWaterIntake) {
      alert("Please fill all the fields");
    } else {
      navigate('/Home');
    }
  };

  return (
    <>
      <h2 style={{ fontSize: "36px", marginTop: '70px', marginLeft: "500px" }}>Calorie & Water Intake Tracker</h2>
      <div className='Total' style={{ borderRadius: "8px", padding: "3px", height: "300px", width: "375px", marginTop: "250px" }}>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="totalCalories">Total Calories:</label>
            <input
              type='number'
              id="totalCalories"
              value={totalCalories}
              onChange={(e) => setTotalCalories(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="totalWaterIntake">Water Intake (in ml):</label>
            <input
              type='number'
              id="totalWaterIntake"
              value={totalWaterIntake}
              onChange={(e) => setTotalWaterIntake(e.target.value)}
              required
            />
          </div>
          <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", borderColor: 'blue' }}>
            <button type="submit">Save Data</button>
          </div>
        </form>
        {submitted && alert('DATA ADDED SUCCESSFULLY')}
      </div>
      <div>
        <button
          style={{
            position: 'absolute',
            bottom: '100px',
            right: '200px',
            color: 'Black',
            border: '2px solid green',
            padding: '10px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          onClick={handleFormSubmits}
        >Continue</button>
      </div>
      <style jsx>{`
        /* Hide number input arrows for Chrome, Safari, Edge, Opera */
        input[type=number]::-webkit-outer-spin-button,
        input[type=number]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Hide number input arrows for Firefox */
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>
    </>
  );
};

export default CalorieWaterTracker;
