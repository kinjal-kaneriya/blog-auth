const mongoose = require('mongoose')

const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/blog_db')
    .then(() => console.log('Database connected successfully...!'))
    .catch((err) => console.log('Database Connection error:', err))
}

module.exports = connectDB
