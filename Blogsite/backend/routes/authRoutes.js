const express = require('express');
const bcrypt = require("bcryptjs");
const User = require('../models/User');

const router = express.Router();

//SignUp Route
router.post("/signup", async (req, res) => {
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: "Email already registered"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password : hashedPassword,
        });

        res.status(201).json({message: "User registered successfully"})
    }
    catch(err) {
        res.status(500).json({message: "Server error"});
    }
})

//SignIn Route
router.post("/signin", async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }

        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "Invalid email"});
        }

        const passCheck = await bcrypt.compare(password, user.password);
        if(!passCheck) {
            return res.status(400).json({message: "Invalid password"});
        }

        res.status(200).json({message: "Login Successfully...!!"});
    }
    catch (err) {
        res.status(500).json({message: "Server error"});
    }
})

module.exports = router;