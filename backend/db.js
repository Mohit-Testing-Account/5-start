const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const connectToMongo = async () => {
  try {
    await mongoose.connect(`${process.env.mongoURI}`);
    console.log("Connected to MongoDB");
    const foodCollection= await mongoose.connection.db.collection("food_items");
    const foodItems = await foodCollection.find({}).toArray();
    global.food_items = foodItems;
   
    const categoryCollection= await mongoose.connection.db.collection("food_Category");
    const foodCategory= await categoryCollection.find({}).toArray();
    global.food_category = foodCategory;
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;










/*const data = await fetched_data.find({}).toArray();
    global.food_items = data;
    console.log(global.food_items);*/



