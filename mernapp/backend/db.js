const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://yashgoel280103:yash1234@cluster0.hf3vm.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';
const mongoDB = async () => {
    try {
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
