const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();
app.use(express.json());
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.set("strictQuery", true);

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Success!");
});

const adminRouter = require("./routes/admin.js");
app.use("/admin", adminRouter);

const serviceProviderRouter = require("./routes/serviceprovider.js");
app.use("/serviceprovider", serviceProviderRouter);

const touristRouter = require("./routes/tourist.js");
app.use("/tourist", touristRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT : ${PORT}`);
});
