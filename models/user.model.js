import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
        trim: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }


})
export default mongoose.model('User', userSchema)