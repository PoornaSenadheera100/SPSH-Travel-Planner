const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({

  Service_ProviderId: {
    type: String,
    required : true
  },

  ServiceId: {
    type: String,
    //maxlength:5,
    required: true
  },
  ServiceName: {
    type: String,
    maxlength:2000,
    required: true
  },

  ServiceLocation: {
    type:String,
    required: true
  },

  ServicePrice: {
    type: Number,
    required: true
  },

  ServiceDuration: {
    type:String,
    required: true
  },
  AvailableTime: {
    type:String,
    required: true
  },
  AvailableDates: {
    type:String,
    required: true
  },
  Capacity:{
    type: Number, 
    required: true
  }, 
  ServiceImage:{
    //Buffer is similar to "Array" data type.
    //type:String
    data: Buffer,
    contentType: [String],
     // required: true,
    },
              
  });

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;