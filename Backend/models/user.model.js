import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    },
    avatar: {
        type: String,
        required: false,
        default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp",
    }
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// userSchema.set('toJSON', {
//   transform: function (doc, ret) {
//     delete ret.password;
//     delete ret.__v;
//     return ret;
//   }
// });

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

const userModel = mongoose.model('user', userSchema);
export default userModel;