const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();

const multer = require("multer");
//import file system.
const fs = require('fs');
require("dotenv").config();

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.set('strictQuery', true);

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//multer has option called disk storage.2 parameters --> destination and file name.
//First we save the images in the computer, and then move it to MongoDB
const storage = multer.diskStorage({
    //creates a folder called uploads and stores the files in it.
     destination:(req,file,cb)=>{
     //cb is the callback.
     cb(null,'uploads')
     },
     filename:(req,file,cb) => {
         //since we could receive multiple files, we are going to store it with the original name.
         cb(null,file.originalname);
     },
 });

//Specify the storage as multer storage.
const upload = multer({
    //Specify the storage as our "Storage" that we created.
    storage:storage
//since we are uploading files one by one, we have to make use of "single".
//we are going to upload images using this name (testImage).
//since we are uploading files one by one, should make use of "single"
})

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB Connection Success!");
});


//The server.js should be able to access the "inventories.js" file of the "routes folder."
//The inventories.js file access path is assigned to a variable called "inventoryRouter"
const serviceRouter = require("./routes/services.js");

//When passing data from frontend to backend, we use a URL and call the backend.(http://localhost:8070/inventory)  
//There's a function called "use" in express.
//Express was initially assigned to a variable called "app"
//This function uses 2 parameters.  When first parameter is called --> it loads the inventories.js file in the routes folder.(Path is assigned to inventoryRouter variable)
app.use("/service",serviceRouter);

app.listen(PORT, ()=>{
    console.log(`Server is up and running on PORT : ${PORT}`);
});