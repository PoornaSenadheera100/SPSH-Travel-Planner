const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose schema defined for the service request object
const serviceRequestSchema = new Schema({
  bookingId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String, //check
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  serviceProviderId: {
    type: String,
    required: true,
  },
  date: {
    type: Date, //check
    required: true,
  },
  time: {
    type: String, //check
    required: true,
  },
  quantity: {
    type: Number,

    required: true,
  },
  price: {
    type: Number, //check
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

// Mongoose model is created for the schema using the model method of Mongoose
const ServiceRequest = mongoose.model("ServiceRequest", serviceRequestSchema);

// export the ServiceRequest model to be used by other modules in the application.
module.exports = ServiceRequest;
