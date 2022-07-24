"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: false,
    },
    age: {
        type: Number,
        required: false,
    },
    avatar: {
        type: String,
        required: false,
    },
}, { timestamps: true });
//# sourceMappingURL=users.model.js.map