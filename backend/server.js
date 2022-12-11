const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();




mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(5000, () => {
            console.log('Server Running on port 5000');
        });
    })
    .catch((err) => console.log(err));