const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define a new schema for tourist 
const touristSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    nic : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    phone : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },
})

