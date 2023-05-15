const router = require("express").Router();
let ServiceRequest = require("../models/ServiceRequest");

//add service request booking
router.route("/add").post((req, res) => {
  //object destructuring assignment
  const {
    bookingId,
    serviceName,
    name,
    contactNo,
    email,
    serviceProviderId,
    date,
    time,
    quantity,
    price,
    status,
  } = req.body;

  //create new service request object
  const newServiceRequest = new ServiceRequest({
    bookingId,
    serviceName,
    name,
    contactNo,
    date,
    email,
    serviceProviderId,
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
  ServiceRequest.find({ status: "Pending" })
    .then((servicerequests) => {
      res.json(servicerequests);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get all service requests of tourist by email
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

//get service request of tourist by booking ID
router.route("/get/bookingId/:bookingId").get(async (req, res) => {
  let bookingId = req.params.bookingId;

  await ServiceRequest.find({ bookingId: `${bookingId}` })
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

//update service request status by bookingId

router.route("/update/bookingId/:bookingId").put(async (req, res) => {
  let bookingId = req.params.bookingId;
  const { status } = req.body;

  await ServiceRequest.findOneAndUpdate(
    { bookingId: bookingId },
    { $set: { status: status } }
  )
    .then(() => {
      res.status(200).send({ status: "Service Request Booking updated" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({
        status: "Error with update service request",
        error: err.message,
      });
    });
});

//delete service request by bookingId
router.route("/delete/bookingId/:bookingId").delete(async (req, res) => {
  let bookingId = req.params.bookingId;

  await ServiceRequest.findOneAndDelete({ bookingId: `${bookingId}` })
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

//Retrieve "accepted" service requests of a given service provider.
router.get("/myrequest/:serviceProviderId", async (req, res) => {
  try {
    const serviceRequests = await ServiceRequest.find({
      serviceProviderId: req.params.serviceProviderId,
      status: "Approved",
    });
    res.json(serviceRequests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
