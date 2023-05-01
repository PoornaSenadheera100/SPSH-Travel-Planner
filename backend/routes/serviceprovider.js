const router = require("express").Router();
let ServiceProvider = require("../models/ServiceProvider");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const nic = req.body.nic;
  const password = req.body.password;

  const newServiceProvider = new ServiceProvider({
    name,
    email,
    phone,
    nic,
    password,
  });

  newServiceProvider
    .save()
    .then(() => {
      res.json("Service Provider Added.");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  ServiceProvider.find()
    .then((serviceProvider) => {
      res.json(serviceProvider);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.route("/delete/:id").delete(async (req, res) => {
//   let sellerId = req.params.id;

//   await Seller.findByIdAndDelete(sellerId)
//     .then(() => {
//       res.status(200).send({ status: "Seller Deleted" });
//     })
//     .catch((err) => {
//       console.log(err.message);
//       res
//         .status(500)
//         .send({ status: "Error with delete Seller", error: err.message });
//     });
// });

// router.route("/get/:id").get(async (req, res) => {
//   let sellerId = req.params.id;
//   const seller = await Seller.findById(sellerId)
//     .then((seller) => {
//       res.status(200).send({ status: "Seller fetched", seller });
//     })
//     .catch((err) => {
//       console.log(err.message);
//       res
//         .status(500)
//         .send({ status: "Error with get seller", error: err.message });
//     });
// });

router.route("/get/email/:email").get(async (req, res) => {
  let email = req.params.email;
  await ServiceProvider.find({ email: `${email}` })
    .then((serviceProvider) => {
      res.json(serviceProvider);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({
        status: "Error with get the Service Provider",
        error: err.message,
      });
    });
});

router.route("/update/:paramemail").put(async (req, res) => {
  let paramemail = req.params.paramemail;
  const { name, email, phone, nic, password } = req.body;
  const updateServiceProvider = {
    name,
    email,
    phone,
    nic,
    password,
  };

  await ServiceProvider.findOneAndUpdate(
    { email: paramemail },
    updateServiceProvider
  )
    .then(() => {
      res.status(200).send({ status: "Service Provider Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Error with updating the Service Provider",
        error: err.message,
      });
    });
});

router.route("/delete/email/:paraemail").delete(async (req, res) => {
  let serviceProviderEmail = req.params.paraemail;

  await ServiceProvider.findOneAndDelete({ email: serviceProviderEmail })
    .then(() => {
      res.status(200).send({ status: "Service Provider Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({
        status: "Error with delete Service Provider",
        error: err.message,
      });
    });
});

module.exports = router;
