"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../model/User");
class AuthController {
    static async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const existingUser = await User_1.User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "Email is already registered" });
            }
            const Hashpassword = await bcryptjs_1.default.hash(password, 10);
            const user = await User_1.User.create({
                name, email, password: Hashpassword,
            });
            return res.status(201).json({
                message: "User registered sucessfully",
                user: { id: user._id, name: user.name, email: user.email }
            });
        }
        catch (error) {
            return res.status(500).json({ message: "server error" });
        }
    }
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User_1.User.findOne({ email });
            if (!user) {
                return res.status(404).json({ messsage: "user is not found" });
            }
            //match password
            const CheckPassword = await bcryptjs_1.default.compare(password, user.password);
            if (!CheckPassword) {
                res.status(401).json({ message: "Invalid password" });
            }
            const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" });
            return res.status(200).json({ message: "User Login Successfully", token });
        }
        catch (error) {
            res.status(500).json({ message: "server error" });
        }
    }
}
exports.AuthController = AuthController;
