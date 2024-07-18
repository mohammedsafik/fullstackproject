// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';



// const Profile = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [updated, setUpdated] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const handleSaveProfile = async () => {
  
    
//     try {
//       const response = await axios.post('http://localhost:3001/Profile', {
//         name,
//         age,
//         height,
//         weight,
//       });
//       console.log('Profile data saved:', response.data);
//       setUpdated(true); // Update state to show updated profile info
//       setSubmitted(true);
      
//     } catch (error) {
//       console.error('Error saving profile data:', error);
//       // Handle error (e.g., show error message)
//     }
  
//   };
//   const handleSaveProfiless=async=>{
//     navigate('/Home');
//   }
//   const handleSaveProfiles=async ()=>{
//     if(!name || !age ||!height ||!weight){
//       alert('Please fill all details');
//     }
//     else{
//       navigate('/setup2');
//     }
//   };

//   return (
    
//     <div>
//        <h2 style={{fontSize:"36px",marginTop:'70px',marginLeft:"600px"}}>Enter Your Data</h2>
    
//     <div className="profile-card" style={{marginLeft:"35rem",marginTop:"5rem",height:"475px",backgroundColor:"#96B6C5",background: "#96B6C5"}}>
      
//       <div className="info">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <label htmlFor="age">Age:</label>
//         <input
//           type='number'     
//           id="age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />

//         <label htmlFor="height">Height (cm):</label>
//         <input
//           type='number'
//           id="height"
//           value={height}
//           onChange={(e) => setHeight(e.target.value)}
//         />

//         <label htmlFor="weight">Weight (kg):</label>
//         <input
//          type="number"
//           id="weight"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
          
//         />
//          {submitted && alert('DATA ADDED SUCCESSFULLY')}
//         <button onClick={()=>{handleSaveProfile()}}>Enter</button>
       
//       </div>
//     </div>
//     {/* <a href="/setup2" style={{color:"green",marginLeft:"85%",marginTop:"100%",backgroundColor:"white"}}>Continue</a> */}
//     <button
//         style={{
//           position: 'absolute',
//           bottom: '100px',
//           right: '200px',
//           color: 'Black',
//           border: '2px solid #96B6C5',
//           padding: '10px 20px',
//           textAlign: 'center',
//           textDecoration: 'none',
//           cursor: 'pointer',
//           borderRadius: '5px',
        
//         }}
//         onClick={handleSaveProfiles}
//       >Continue</button>
//       <button
//         style={{
//           position: 'absolute',
//           bottom: '100px',
//           right: '50px',
//           color: 'Black',
//           border: '2px solid #96B6C5',
//           padding: '10px 20px',
//           textAlign: 'center',
//           textDecoration: 'none',
//           cursor: 'pointer',
//           borderRadius: '5px',
        
//         }}
//         onClick={handleSaveProfiless}
//       >Existing User</button>
    
//     </div>
     
  
//   );
// };

// export default Profile;

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [updated, setUpdated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSaveProfile = async () => {
    try {
      const response = await axios.post('http://localhost:3001/Profile', {
        name,
        age,
        height,
        weight,
      });
      console.log('Profile data saved:', response.data);
      setUpdated(true); // Update state to show updated profile info
      setSubmitted(true);
    } catch (error) {
      console.error('Error saving profile data:', error);
      // Handle error (e.g., show error message)
    }
  };

  const handleSaveProfiless = () => {
    navigate('/Home');
  };

  const handleSaveProfiles = () => {
    if (!name || !age || !height || !weight) {
      alert('Please fill all details');
    } else {
      navigate('/setup2');
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: '36px', marginTop: '70px', marginLeft: '600px' }}>Enter Your Data</h2>
      <div className="profile-card" style={{ marginLeft: '35rem', marginTop: '5rem', height: '475px', backgroundColor: '#96B6C5' }}>
        <div className="info">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="age">Age:</label>
          <input
            type='number'
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <label htmlFor="height">Height (cm):</label>
          <input
            type='number'
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          {submitted && alert('DATA ADDED SUCCESSFULLY')}
          <button onClick={handleSaveProfile}>Enter</button>
        </div>
      </div>
      <button
        style={{
          position: 'absolute',
          bottom: '100px',
          right: '200px',
          color: 'Black',
          border: '2px solid #96B6C5',
          padding: '10px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
        onClick={handleSaveProfiles}
      >Continue</button>
      <button
        style={{
          position: 'absolute',
          bottom: '100px',
          right: '50px',
          color: 'Black',
          border: '2px solid #96B6C5',
          padding: '10px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
        onClick={handleSaveProfiless}
      >Existing User</button>
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
    </div>
  );
};

export default Profile;

