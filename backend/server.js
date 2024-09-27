const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;
const messageRoutes = require('../routes/messages.js');
app.use('/api/v1/messages', messageRoutes);

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors()); // To enable CORS
app.use(express.json()); // To parse JSON request

// mongoDB connection
const uri = mongoURI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log(`MongDB connection is succesfully established`);
});

app.get("/", (req, res) => {
  res.send("Hello from anon Backend! lol");
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
