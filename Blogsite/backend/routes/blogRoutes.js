const express = require('express');
const Blog = require('../models/Blog')

const router = express.Router();

//Create Blog
router.post("/create-blog", async (req, res) => {
    try {
        const {title, image, content} = req.body;

        if(!title || !image || !content) {
            return res.status(400).json({message: "All fields are required"});
        }

        await Blog.create({
            title,
            image,
            content,
        });

        res.status(201).json({message: "Blog published successfully...!!"});
    }
    catch(err) {
        res.status(500).json({message: "Server error"});
    }
})

module.exports = router;