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
// create a model based on the tourist schema
const Tourist = mongoose.model("Tourist", touristSchema);

// export the Buyer model to be used in other parts of the application
module.exports = Tourist;

