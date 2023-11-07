import mongoose from "mongoose";
export const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost/rpmusser");
        console.log('db is conected')
    } catch (err) {
        console.log(err);
    }
};