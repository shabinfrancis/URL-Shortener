import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength: [3, 'First name must be at least 3 characters long.']
        },
        lastname: {
            type: String,
            required: true,
            minLength: [3, 'Last name must be at least 3 characters long.']
        }
    },
    email: {
        type: String,
        required: true,
        minLength: [5, 'Email must be at least 5 characters long.']

    },
    password: {
        type: String,
        required: true,
        select: false,
    }
})

const userModel = mongoose.model('user', userSchema);
export default userModel;