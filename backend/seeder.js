import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';
import users from './data/users.js';
import Order from './models/orderModel.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';

dotenv.config();

// Connect to MongoDB
connectDB();

// Import data
const importData = async () => {
    try {
        // Clear all data
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        // Insert new data
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        });
        await Product.insertMany(sampleProducts);

        console.log('Data imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
}

// Destroy data
const destroyData = async () => {
    try {
        // Clear all data
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
}

// Run the script
if (process.argv[2] === '-d') {
    destroyData();
}
else {
    importData();
}

// Run the script
// node backend/seeder -d
// node backend/seeder
//  -d is a flag that we can use to destroy the data
//  if we don't use the flag, it will import the data