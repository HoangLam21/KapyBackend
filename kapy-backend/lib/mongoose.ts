import mongoose from "mongoose";  // ES module import

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.DATABASE_URL) {
        return console.log('MISSING MONGODB_URL');
    }
    if (isConnected) {
        return console.log('DATABASE IS ALREADY CONNECTED');
    }
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            dbName: "Kapy"
        });
        isConnected = true;
        console.log('DATABASE CONNECTED');
    } catch (error) {
        console.log(error);
    }
};
