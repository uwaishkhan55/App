  
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://Uwaish55:Uwaish55@cluster0-uujh1.azure.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const register = require('./routes/register');
const usersRouter = require('./routes/users');
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use('/register', register);
app.use('/users', usersRouter);
app.use('/verification',require('./routes/verification'));
app.get('/cookies',(req,res)=>{
  const j=req.cookies.token;
     res.json({
          j
     })
})

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('Client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});