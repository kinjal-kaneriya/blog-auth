const express = require('express')
const Blog = require('../models/Blog')

const router = express.Router()

//Create Blog
router.post('/create-blog', async (req, res) => {
    try {
        const { title, image, content } = req.body

        if (!title || !image || !content) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        await Blog.create({
            title,
            image,
            content,
        })

        res.status(201).json({ message: 'Blog published successfully...!!' })
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
})

//Get all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).json(blogs);

    }
    catch (err) {
        res.status(500).json({ message: "Server error" });
    }
})

//Update blog
router.put("/editblog/:id", async (req, res) => {
    try {
        const { title, image, content } = req.body;

        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        blog.title = title;
        blog.image = image;
        blog.content = content;

        await blog.save();

        res.status(200).json({ message: "Blog updated successfully...!!" })
    }
    catch (err) {
        res.status(500).json({ message: "Server error" });
    }
})

// Get a single blog 
router.get("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});


//Delete Blog
router.delete('/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog deleted successfully..." });
    }
    catch (err) {
        res.status(500).json({ message: "Server error" });
    }
})

module.exports = router
