// import React, { useState } from 'react'
// import './InputForm.css'
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const Waterinputform = (props) => {
//     const [calories, setCalories] = useState('');
//     const [isvalid, setIsvalid] = useState(false);


//     const calorieHandler = (event) =>{
//         setIsvalid(false);
//         setCalories(event.target.value);
//     }

//     const formSubmitHandle = (event) =>{
//         event.preventDefault();
        
//         const data ={
//             calories : parseInt(calories),
//             id : Math.random()
//         }

//         if(calories.trim().length === 0 ){
//             setIsvalid(true);
//             alert("ADD WATER QUANTITY");
//             return ;
//         }

//         props.onAddFood(data);
//         setCalories('');
//     }
   

//     return (

//         <>
            
//     <div className='diveee'>
//             <div className="whole-form">
//                 <form onSubmit={formSubmitHandle}>
//                     <div className='new-calorie__controls'>
//                         <div className='new-calorie__control'>
//                             <label htmlFor="Calories">Water Quantity(IN LITRES)</label>
//                             <input type='number' onChange={calorieHandler} value={calories}/>
//                         </div>
//                     </div>
//                     <div className='new-calorie__actions'>
//                         <button type="submit" className='btn' disabled={isvalid}>Water</button>
//                     </div>
//                 </form>
//             </div>
//             </div>
//         </>

//     )
// }
// export default Waterinputform
// // import React, { useState } from 'react';
// // import './InputForm.css';

// // const Waterinputform = (props) => {
// //   const [calories, setCalories] = useState('');
// //   const [isValid, setIsValid] = useState(false);

// //   const calorieHandler = (event) => {
// //     setIsValid(false);
// //     setCalories(event.target.value);
// //   };

// //   const formSubmitHandler = (event) => {
// //     event.preventDefault();

// //     const caloriesInt = parseInt(calories);
// //     if (isNaN(caloriesInt) || caloriesInt <= 0) {
// //       setIsValid(true);
// //       alert('Please enter a valid quantity of water.');
// //       return;
// //     }

// //     const data = {
// //       calories: caloriesInt,
// //       id: Math.random(),
// //     };

// //     if (typeof props.onAddFood === 'function') {
// //       props.onAddFood(data);
// //     }

// //     setCalories('');
// //   };

// //   return (
// //     <div className='diveee'>
// //       <div className="whole-form">
// //         <form onSubmit={formSubmitHandler}>
// //           <div className='new-calorie__controls'>
// //             <div className='new-calorie__control'>
// //               <label htmlFor="calories">Water Quantity (IN LITRES)</label>
// //               <input
// //                 type='number'
// //                 value={calories}
// //                 onChange={calorieHandler}
// //                 placeholder="Enter water quantity"
// //               />
// //             </div>
// //           </div>
// //           <div className='new-calorie__actions'>
// //             <button type="submit" className='btn' disabled={isValid}>Add Water</button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Waterinputform;


// import React, { useState } from 'react';
// import './InputForm.css';
// import axios from 'axios';

// const FoodInputForm = (props) => {
//   const [foodName, setFoodName] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [isValid, setIsValid] = useState(false);

//   const nameHandler = (event) => {
//     setIsValid(false);
//     setFoodName(event.target.value);
//   };

//   const quantityHandler = (event) => {
//     setIsValid(false);
//     setQuantity(event.target.value);
//   };

//   const formSubmitHandler = async (event) => {
//     event.preventDefault();

//     const quantityInt = parseFloat(quantity);
//     if (!foodName || isNaN(quantityInt) || quantityInt <= 0) {
//       setIsValid(true);
//       alert('Please enter a valid food name and quantity.');
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:3001/foodquantity', {
//         foodName,
//         quantity
//       });
//       console.log('Profile data saved:', response.data);
//       setUpdated(true); // Update state to show updated profile info
//       setSubmitted(true);
//     } catch (error) {
//       console.error('Error saving profile data:', error);
//       // Handle error (e.g., show error message)
//     }


//   };

//   return (
//     <div className='diveee'>
//       <div className="whole-form">
//         <form onSubmit={formSubmitHandler}>
//           <div className='new-calorie__controls'>
//             <div className='new-calorie__control'>
//               <label htmlFor="foodName">Food Name</label>
//               <input
//                 type='text'
//                 value={foodName}
//                 onChange={nameHandler}
//                 placeholder="Enter food name"
//               />
//             </div>
//             <div className='new-calorie__control'>
//               <label htmlFor="quantity">Quantity</label>
//               <input
//                 type='number'
//                 value={quantity}
//                 onChange={quantityHandler}
//                 placeholder="Enter quantity"
//               />
//             </div>
//           </div>
//           <div className='new-calorie__actions'>
//             <button type="submit" className='btn' style={{marginRight:"60px",backgroundColor:"#006769"}} disabled={isValid}>Add Food</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FoodInputForm;




// import 'react-circular-progressbar/dist/styles.css';
// import React, { useState } from 'react';
// import './InputForm.css';

// const Waterinputform = (props) => {
//   const [calories, setCalories] = useState('');
//   const [isValid, setIsValid] = useState(false);

//   const calorieHandler = (event) => {
//     setIsValid(false);
//     setCalories(event.target.value);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();

//     const caloriesInt = parseFloat(calories);
//     if (isNaN(caloriesInt) || caloriesInt <= 0) {
//       setIsValid(true);
//       alert('Please enter a valid quantity of water.');
//       return;
//     }

//     const data = {
//       calories: caloriesInt,
//       id: Math.random(),
//     };

//     if (typeof props.onAddFood === 'function') {
//       props.onAddFood(data);
//     }

//     setCalories('');
//   };

//   return (
//     <div className='diveee'>
//       <div className="whole-form">
//         <form onSubmit={formSubmitHandler}>
//           <div className='new-calorie__controls'>
//             <div className='new-calorie__control'>
//               <label htmlFor="calories">Water Quantity (IN ML)</label>
//               <input
//                 type='number'
//                 value={calories}
//                 onChange={calorieHandler}
//                 placeholder="Enter water quantity"
//               />
//             </div>
//           </div>
//           <div className='new-calorie__actions'>
//             <button type="submit" className='btn' style={{marginRight:"60px",backgroundColor:"#006769"}} disabled={isValid}>Add Water</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Waterinputform;


import 'react-circular-progressbar/dist/styles.css';
import React, { useState } from 'react';
import './InputForm.css';
import axios from 'axios';

const Waterinputform = (props) => {
  const [quantity, setQuantity] = useState('');
  const [isValid, setIsValid] = useState(false);

  const quantityHandler = (event) => {
    setIsValid(false);
    setQuantity(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const quantityInt = parseFloat(quantity);
    if (isNaN(quantityInt) || quantityInt <= 0) {
      setIsValid(true);
      alert('Please enter a valid quantity of water.');
      return;
    }

    const data = {
      quantity: quantityInt,
      id: Math.random(),
    };

    try {
      // Send data to the server
      await axios.post('http://localhost:3001/waterquantity', { quantity: quantityInt });
      if (typeof props.onAddWater === 'function') {
        props.onAddWater(data);
      }
      setQuantity('');
    } catch (error) {
      console.error('There was an error adding the water quantity!', error);
    }
  };

  return (
    <div className='diveee'>
      <div className="whole-form">
        <form onSubmit={formSubmitHandler}>
          <div className='new-calorie__controls'>
            <div className='new-calorie__control'>
              <label htmlFor="quantity">Water Quantity (IN ML)</label>
              <input
               
                value={quantity}
                onChange={quantityHandler}
                placeholder="Enter water quantity"
              />
            </div>
          </div>
          <div className='new-calorie__actions'>
            <button type="submit" className='btn' style={{marginRight:"60px",backgroundColor:"#006769"}} disabled={isValid}>Add Water</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Waterinputform;
