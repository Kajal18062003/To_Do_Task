"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const console_1 = require("console");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGOURL = process.env.MONGODB;
let isConntected = false;
const connectDB = async () => {
    if (isConntected) {
        console.log("mongodb is alreday connected");
        return;
    }
    try {
        await mongoose_1.default.connect(MONGOURL);
        isConntected = true;
        console.log("Mongodb is connected successfully");
    }
    catch (err) {
        console.error("Connection failed", console_1.error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
