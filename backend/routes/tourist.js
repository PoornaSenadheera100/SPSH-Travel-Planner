const router = require("express").Router();
let Tourist = require("../models/Tourist");

// Add new Tourist
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const nic = req.body.nic;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;

  // Creating a new Tourist object with extracted details
  const newTourist = new Tourist({
    name,
    nic,
    email,
    phone,
    password,
  });

  // Saving the new Tourist object in the database
  newTourist
    .save()
    .then(() => {
      res.json("Tourist Added.");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Get all tourist
router.route("/").get((req, res) => {
  Tourist.find()
    .then((tourist) => {
      res.json(tourist);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Get one tourists information by providing the email
router.route("/get/email/:email").get(async (req, res) => {
  let email = req.params.email;
  await Tourist.find({ email: `${email}` })
    .then((tourist) => {
      res.json(tourist);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get the tourist", error: err.message });
    });
});

//Get one specific tourist and update
router.route("/update/:paramemail").put(async (req, res) => {
  let paramemail = req.params.paramemail;
  const { name, nic, email,phone } = req.body;
  const updateTourist = {
    name,
    nic,
    email,
    phone
  };

  await Tourist.findOneAndUpdate({ email: paramemail }, updateTourist)
    .then(() => {
      res.status(200).send({ status: "Tourist Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({
          status: "Error with updating the tourist",
          error: err.message,
        });
    });
});

// Delete tourist by email
router.route("/delete/email/:paraemail").delete(async (req, res) => {
  let touristEmail = req.params.paraemail;

  await Buyer.findOneAndDelete({ email: touristEmail })
    .then(() => {
      res.status(200).send({ status: "Tourist Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({
          status: "Error occured when deleting tourist",
          error: err.message,
        });
    });
});
module.exports = router;
