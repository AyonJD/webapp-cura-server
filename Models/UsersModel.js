const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLenght: 6,
    },
    role: {
        type: String,
        default: "account",
        enum: ["account", "admin", "supervisor", "executive"]
    },
}, { timestamps: true });

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;