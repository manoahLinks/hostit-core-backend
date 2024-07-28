require("dotenv").config();
const express = require('express'),
    app = express(),
    cors = require('cors'),
    sdk =  require('@api/poap'),
    eventRoutes = require('./routes/events'),
    linkRoutes = require('./routes/links'),
    userRoutes = require('./routes/user')
    formidable = require('express-formidable'),
    path = require('path'),
    models = require('./models');


app.use(cors())    
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(formidable({
    encoding: 'utf-8',
    uploadDir: path.join(__dirname, 'uploads'),
    multiples: true,
    keepExtensions: true// req.files to be arrays of files
  }))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.send('welcome to Host-it-core-backend')
})

app.use('/events', eventRoutes);
app.use('/links', linkRoutes);
app.use('/users', userRoutes);

app.listen(process.env.PORT ,() => {
    console.log("Host-it server is running on port:", process.env.PORT);
})