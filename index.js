const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/practice_mern');


  // Assuming food and quantity are user inputs or variables



// app.post('/register', (req, res)=>{
//     // To post / insert data into database

//     const {email, password} = req.body;
//     FormDataModel.findOne({email: email})
//     .then(user => {
//         if(user){
//             res.json("Already registered")
//         }
//         else{
//             FormDataModel.create(req.body)
//             .then(log_reg_form => res.json(log_reg_form))
//             .catch(err => res.json(err))
//         }
//     })
    
// })

// app.post('/login', (req, res)=>{
//     // To find record from the database
//     const {email, password} = req.body;
//     FormDataModel.findOne({email: email})
//     .then(user => {
//         if(user){
//             // If user found then these 2 cases
//             if(user.password === password) {
//                 res.json("Success");
//             }
//             else{
//                 res.json("Wrong password");
//             }
//         }
//         // If user not found then 
//         else{
//             res.json("No records found! ");
//         }
//     })
// })
// server.js

const userSchema1 = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('Auth', userSchema1);

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).send('Already registered');
      }
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.status(201).send('Registered successfully');
  } catch (error) {
      res.status(500).send('Error registering user');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).send('User not found');
      }
      if (user.password !== password) {
          return res.status(400).send('Incorrect password');
      }
      res.status(200).send('Success');
  } catch (error) {
      res.status(500).send('Error logging in');
  }
});






app.post('/cal', async (req, res) => {
  const { foodName, quantity } = req.body;

  const calorieMap = {
    apple: 52,
    banana: 89,
    orange: 62,
    bread: 74,
    milk: 42,
    cheese: 113,
    chicken: 239,
    salad: 15,
    rice: 130,
    pasta: 221,
    chocolate: 208,
    cookie: 53,
    beef:110,
    chicken:150,
    egg:60,
    soya:120,
  };
  
  if (!calorieMap[foodName]) {
    return res.status(400).json({ error: 'Food item not found' });
  }

  const calories = calorieMap[foodName] * quantity;
  res.json({ calories });
});
const userDataSchema = new mongoose.Schema({
    name: String,
    age: Number,
    height: String,
    weight: String
  });
  const UserData = mongoose.model('UserData', userDataSchema);
  
  // Middleware
  app.use(bodyParser.json());
  
  // Route to handle saving user data
  app.post('/Profile', async (req, res) => {
    try {
      const { name, age, height, weight } = req.body;
      // Create a new instance of UserData model
      const newUser = new UserData({
        name,
        age,
        height,
        weight
      });
      // Save the user data to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User data saved successfully' });
    } catch (error) {
      console.error('Error saving user data:', error);
      res.status(500).json({ error: 'Error saving user data' });
    }
  });
//   app.get('/send', async (req, res) => {
//     try {
//       // Fetch user data from MongoDB
//       //const userData = await UserData.findOne(); // Assuming you want to retrieve a single user's data (you may need to add a query condition)
//       const userData = await UserData.find().sort({ createdAt: -1 }).limit(1);
//       if (!userData) {
//         return res.status(404).json({ error: 'User profile not found' });
//       }
  
//       res.status(200).json(userData);
//     } catch (error) {
//       console.error('Error fetching user profile data:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
app.get('/send', async (req, res) => {
    try {
      // Fetch the most recent user data (last entered)
      const userData = await UserData.findOne().sort({ createdAt: -1 });
  
      if (!userData) {
        return res.status(404).json({ error: 'User profile not found' });
      }
  
      res.status(200).json(userData);
    } catch (error) {
      console.error('Error fetching user profile data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  const calorieWaterSchema = new mongoose.Schema({
    totalCalories: Number,
    totalWaterIntake: Number,
  });
  const CalorieWaterData = mongoose.model('CalorieWaterData', calorieWaterSchema);

  app.post('/Limit', async (req, res) => {
    try {
      const { totalCalories, totalWaterIntake } = req.body;
  
      // Create a new calorie water data entry
      const newEntry = new CalorieWaterData({
        totalCalories,
        totalWaterIntake
      });
  
      // Save the new entry to the database
      await newEntry.save();
  
      res.status(201).json({ message: 'Calorie and water intake data saved successfully' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Error saving data' });
    }
  });

  app.get('/Limitget', async (req, res) => {
    const { userId } = req.params;
    try {
      const userData = await CalorieWaterData.findOne({ userId });
      if (!userData) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      // Send only the waterGoal value in the response
      res.json({ totalWaterIntake: userData.totalWaterIntake });
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  app.get('/Limitgets', async (req, res) => {
    const { userId } = req.params;
    try {
      const userData = await CalorieWaterData.findOne({ userId });
      if (!userData) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      // Send only the waterGoal value in the response
      res.json({ totalCalories: userData.totalCalories });
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  const highCalorieFoods = [
    { id: 1, name: 'Avocado', calories: 160, imageUrl: '../' },
    { id: 2, name: 'Peanut Butter', calories: 588, imageUrl: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Peanut+Butter' },
    { id: 3, name: 'Cheese', calories: 402, imageUrl: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Cheese' },
    { id: 4, name: 'Dark Chocolate', calories: 546, imageUrl: 'https://via.placeholder.com/150/FF33A6/FFFFFF?text=Dark+Chocolate' },
    { id: 5, name: 'Olive Oil', calories: 884, imageUrl: 'https://via.placeholder.com/150/FFFF33/FFFFFF?text=Olive+Oil' },
    { id: 6, name: 'Nuts', calories: 607, imageUrl: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Nuts' },
    { id: 7, name: 'Salmon', calories: 208, imageUrl: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Salmon' },
    { id: 8, name: 'Granola', calories: 471, imageUrl: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Granola' },
    { id: 9, name: 'Eggs', calories: 155, imageUrl: 'https://via.placeholder.com/150/FF33A6/FFFFFF?text=Eggs' },
    { id: 10, name: 'Beef', calories: 250, imageUrl: 'https://via.placeholder.com/150/FFFF33/FFFFFF?text=Beef' }
];

// Route to get high-calorie foods
app.get('/high-calorie', (req, res) => {
    res.json(highCalorieFoods);
});

const waterSchema = new mongoose.Schema({
  quantity: Number
});

const Water = mongoose.model('Water', waterSchema);

// Endpoint to add water quantity
app.post('/waterquantity', async (req, res) => {
  try {
      const { quantity } = req.body;
      const newWater = new Water({ quantity });
      await newWater.save();
      res.status(201).json(newWater);
  } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Error saving data' });
  }
});

app.get('/totalwaterconsumed', async (req, res) => {
  try {
      const totalWater = await Water.aggregate([
          { $group: { _id: null, total: { $sum: "$quantity" } } }
      ]);
      res.json({ totalWaterConsumed: totalWater[0] ? totalWater[0].total : 0 });
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
  }
});

const qunt = new mongoose.Schema({
  foodname: String,
  calories: Number,
  id: Number
});

const Foodname = mongoose.model('num', qunt);

app.use(bodyParser.json());

// Endpoint to handle adding food
app.post('/addfood', async (req, res) => {
  try {
      const { foodname, calories, id } = req.body;
      // Create a new food item using the schema
      const food = new Foodname({ foodname, calories, id });
      // Save the food item to the database
      await food.save();
      res.status(201).json({ message: 'Food added successfully', data: food });
  } catch (error) {
      console.error('Error adding food:', error);
      res.status(500).json({ message: 'Failed to add food' });
  }
});

const waterSchema1 = new mongoose.Schema({
  quantity: Number
});

const Water1 = mongoose.model('Calorie', waterSchema1);

// Endpoint to add water quantity
app.post('/Calquantity', async (req, res) => {
  try {
      const { quantity } = req.body;
      const newWater = new Water1({ quantity });
      await newWater.save();
      res.status(201).json(newWater);
  } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Error saving data' });
  }
});

app.get('/totalCalconsumed', async (req, res) => {
  try {
      const totalWater = await Water1.aggregate([
          { $group: { _id: null, total: { $sum: "$quantity" } } }
      ]);
      res.json({ totalWaterConsumed: totalWater[0] ? totalWater[0].total : 0 });
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
  }
});



app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");
});