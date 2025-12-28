// const mongoose = require('mongoose');
import mongoose from 'mongoose'
console.log(process.env.DB_CONNECT);

const connectToDb = async () => {
	try {
		await mongoose.connect(process.env.DB_CONNECT);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('MongoDB connection error:', error);
		process.exit(1);
	}
}

export default connectToDb;