// src/components/HighCalorieFoods.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HighCalorieFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/high-calorie')
            .then(response => setFoods(response.data))
            .catch(error => console.error('Error fetching high-calorie foods:', error));
    }, []);

    return (
        <div style={{marginTop:"-10px"}}>
            <h2>High-Calorie Food Recommendations</h2>
            <div style={styles.foodList}>
                {foods.map(food => (
                    <div key={food.id} style={styles.foodItem}>
                        <img src={food.imageUrl} alt={food.name} style={styles.foodImage} />
                        <h3>{food.name}</h3>
                        <p>{food.calories} kcal</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    foodList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    foodItem: {
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center',
        width: '200px',
    },
    foodImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '4px',
    }
};

export default HighCalorieFoods;
