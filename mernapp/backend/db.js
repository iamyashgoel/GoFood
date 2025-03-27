require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
const mongoDB = async () => {
    try {
        console.log("Mongo URI:", process.env.MONGO_URI);
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('Connected to MongoDB!');
        try {
            const food_items = mongoose.connection.db.collection("food_items");
            const itemsData = await food_items.find({}).toArray();

            const foodCategory = mongoose.connection.db.collection("foodCategory");
            const categoryData = await foodCategory.find({}).toArray();

            global.food_items = itemsData;
            global.foodCategory = categoryData;

        } catch (fetchError) {
            console.log(fetchError);
        }
    }
    catch (err) {
        console.log('Error!', err);
        process.exit(1);
    }
}

module.exports = mongoDB;
