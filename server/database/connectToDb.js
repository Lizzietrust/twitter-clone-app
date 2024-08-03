import mongoose from "mongoose";

const connectToDb = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Successfully connected to database: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to database: ${error.message}`);
        process.exit(1);
    }
}

export default connectToDb;