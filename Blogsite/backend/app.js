const express = require('express')
const app = express()
const cors = require('cors')

const authRoutes = require('./routes/authRoutes')
const blogRoutes = require('./routes/blogRoutes')

app.use(express.json())
app.use(cors())

//auth routes
app.use('/api/auth', authRoutes)

//blog routes
app.use('/api/blog', blogRoutes)

module.exports = app
