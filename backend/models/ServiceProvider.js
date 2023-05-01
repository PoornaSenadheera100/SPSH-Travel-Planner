const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceProviderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  nic: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const ServiceProvider = mongoose.model(
  "ServiceProvider",
  serviceProviderSchema
);

module.exports = ServiceProvider;
