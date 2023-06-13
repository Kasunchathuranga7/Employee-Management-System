const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");   //import dependencies and assign to veriables 
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070; //define the connecting port

app.use(cors());                //use cors dependency
app.use(bodyParser.json());     //for use json format

const URL = process.env.MONGODB_URL;    
mongoose.connect(URL)

const connection = mongoose.connection;   //open the connection 
connection.once("open", () => {
    console.log("MongoDB connection successful !");

})

const employeeRouter = require("./routes/employee.js");
app.use("/employee",employeeRouter);

app.listen(PORT, () => {
    console.log(`Server is up and run on the port ${PORT}`)
})