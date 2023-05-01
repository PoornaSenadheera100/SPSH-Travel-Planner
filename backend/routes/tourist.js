const router = require("express").Router();
let Tourist = require("../models/Tourist");


// Add new Tourist
router.route("/add").post((req, res)=>{
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
        password
    })

    // Saving the new Tourist object in the database
    newTourist.save().then(()=>{
        res.json("Tourist Added.");
    }).catch((err)=>{
        console.log(err);
    })
})

//Get all tourist 
route.route("/").get((req,res)=>{
    Tourist.find().then((tourist)=>{
        res.json(tourist);
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;