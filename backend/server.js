const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json())

const uri = 'mongodb://localhost:27017/exercise';
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', ()=>{ //it show a message to us
    console.log("mongo database connection established successfully");
})


const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, function(){
    console.log(`http://localhost:${port}/`);
})

