const router = require("express").Router();
let ServiceRequest = require("../models/ServiceRequest");

//add service request booking
router.route("/add").post((req, res) => {
  //object destructuring assignment
  const { name, contactNo, email, date, time, quantity, price, status } =
    req.body;

  //create new service request object
  const newServiceRequest = new ServiceRequest({
    name,
    contactNo,
    date,
    email,
    time,
    quantity,
    price,
    status,
  });

  //adding new service request to database
  newServiceRequest
    .save()
    .then(() => {
      res.json("Service Request Booked");
    })
    .catch((err) => {
      console.log(err);
    });
});

//get all service requests
router.route("/").get((req, res) => {
  ServiceRequest.find()
    .then((servicerequests) => {
      res.json(servicerequests);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/email/:email").get(async (req, res) => {
  let email = req.params.email;

  await ServiceRequest.find({ email: `${email}` })
    .then((servicerequest) => {
      res.json(servicerequest);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get service request", error: err.message });
    });
});

//delete service request by email

router.route("/delete/email/:email").delete(async (req, res) => {
  let email = req.params.email;

  await ServiceRequest.findOneAndDelete({ email: `${email}` })
    .then(() => {
      res.status(200).send({ status: "Service Request Booking deleted :(" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({
        status: "Error with delete service request",
        error: err.message,
      });
    });
});

module.exports = router;
