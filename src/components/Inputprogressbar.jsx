// import React, { useState } from 'react'
// import './InputForm.css'
// // import { CircularProgressbar } from 'react-circular-progressbar';
// // import 'react-circular-progressbar/dist/styles.css';

// const InputForm = (props) => {
    
//     const [food, setFood] = useState('');
//     const [calories, setCalories] = useState('');
//     const [isvalid, setIsvalid] = useState(false);

//     const foodHandlerr = (event) =>{
//         setIsvalid(false);
//         setFood(event.target.value);
//     }

//     const calorieHandlerr = (event) =>{
//         setIsvalid(false);
//         setCalories(event.target.value);
//     }

//     const formSubmitHandlerr = (event) =>{
//         event.preventDefault();
        
//         const data ={
//             foodname : food,
//             calories : parseInt(calories),
//             id : Math.random()
//         }

//         if(food.trim().length === 0 || calories.trim().length === 0 ){
//             setIsvalid(true);
//             alert("Add Food Name and Calories Both!");
//             return ;
//         }

//         props.onAddFood(data);
//         setFood('');
//         setCalories('');
//     }
    
  

//     return (

//         <>
//             <div className='divee'>
//             <div className="whole-form">
//                 <form onSubmit={formSubmitHandlerr}>
//                     <div className='new-calorie__controls'>
//                         <div className='new-calorie__control'>
//                             <label htmlFor="Food Name">Food Name</label>
//                             <input type='text' onChange={foodHandlerr} value={food}/>
//                         </div>
//                         <div className='new-calorie__control'>
//                             <label htmlFor="Calories">Calories</label>
//                             <input type='number' onChange={calorieHandlerr} value={calories}/>
//                         </div>
//                     </div>
//                     <div className='new-calorie__actions'>
//                         <button type="submit" className='btn' style={{marginRight:"90px",backgroundColor:"#FF5F00"}}disabled={isvalid}>Add Calories</button>
//                     </div>
//                 </form>
//             </div>
//             </div>
//         </>

//     )
// }

// export default InputForm


import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './InputForm.css';

const InputForm = (props) => {
    
    const [food, setFood] = useState('');
    const [calories, setCalories] = useState('');
    const [isvalid, setIsvalid] = useState(false);

    const foodHandlerr = (event) =>{
        setIsvalid(false);
        setFood(event.target.value);
    }

    const calorieHandlerr = (event) =>{
        setIsvalid(false);
        setCalories(event.target.value);
    }

    const formSubmitHandlerr = async (event) =>{
        event.preventDefault();
        
        const data ={
            foodname : food,
            calories : parseInt(calories),
            id : Math.random()
        }

        if(food.trim().length === 0 || calories.trim().length === 0 ){
            setIsvalid(true);
            alert("Add Food Name and Calories Both!");
            return ;
        }

        try {
            // Make a POST request to your backend API to save the data
            const response = await axios.post('http://localhost:3001/addfood', data);
            console.log(response.data); // Log the response from the server
            // Reset the form inputs after successful submission
            setFood('');
            setCalories('');
            props.onAddFood(data);
        } catch (error) {
            console.error('Error adding food:', error);
            // Handle error here, such as displaying an error message to the user
        }
    }
    
    return (
        <>
            <div className='divee'>
            <div className="whole-form">
                <form onSubmit={formSubmitHandlerr}>
                    <div className='new-calorie__controls'>
                        <div className='new-calorie__control'>
                            <label htmlFor="Food Name">Food Name</label>
                            <input type='text' onChange={foodHandlerr} value={food}/>
                        </div>
                        <div className='new-calorie__control'>
                            <label htmlFor="Calories">Calories</label>
                            <input  onChange={calorieHandlerr} value={calories}/>
                        </div>
                    </div>
                    <div className='new-calorie__actions'>
                        <button type="submit" className='btn' style={{marginRight:"90px",backgroundColor:"#FF5F00"}}disabled={isvalid}>Add Calories</button>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default InputForm;




