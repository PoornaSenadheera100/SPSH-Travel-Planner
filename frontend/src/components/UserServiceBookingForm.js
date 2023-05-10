import axios from "axios";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import LoadingSpinner from "./LoadingSpinner";

export default function UserServiceBookingForm(props) {
  const email = sessionStorage.getItem("touristEmail");
  let { serviceProviderId, serviceId } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ServicePrice, setServicePrice] = useState();
  const [AvailableTime, setAvailableTime] = useState("");
  const [AvailableDates, setAvailableDates] = useState("");
  const [Image, setImage] = useState("");
  let [quantity, setQuantity] = useState(1);
  let bookingStatus = "Pending";

  //convert Service price to number
  let total;
  if (quantity <= 0) {
    total = ServicePrice;
  } else {
    total = Number(ServicePrice) * quantity;
  }

  const d = new Date();
  const orderRef =
    d.getDate().toString() +
    d.getMonth().toString() +
    d.getFullYear().toString() +
    d.getHours().toString() +
    d.getMinutes().toString() +
    d.getSeconds().toString();

  function getTouristInformation() {
    axios
      .get(`http://localhost:8070/tourist/get/email/${email}`)
      .then((res) => {
        // console.log(res.data);
        setName(res.data[0].name);
        setPhone(res.data[0].phone);
      })
      .catch((err) => {
        alert("Error in fetching tourist data");
      });
  }

  function getServiceDetails() {
    axios
      .get(
        `http://localhost:8070/service/getservice/${serviceId}/${serviceProviderId}`
      )
      .then((res) => {
        console.log("hi");
        console.log(serviceId);
        console.log(serviceProviderId);
        // console.log(res.data);
        // console.log(serviceProviderId);
        setServicePrice(res.data[0].ServicePrice);
        setAvailableTime(res.data[0].AvailableTime);
        setAvailableDates(res.data[0].AvailableDates);
        setImage(res.data[0].Image);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function makeBooking(e) {
    e.preventDefault();

    const newBooking = {
      orderRef,
      name,
      phone,
      email,
      serviceProviderId,
      AvailableDates,
      AvailableTime,
      quantity,
      total,
      bookingStatus,
    };

    axios
      .post(`http://localhost:8070/servicerequest/add`, newBooking)
      .then(() => {
        alert("Booking Successful");
        window.location.replace("http://localhost:3000/tourist");
      });
  }

  useEffect(() => {
    getTouristInformation();
    getServiceDetails();
  });

  const getImageSource = (imageData, imageType) => {
    // Set the MIME type based on the image type
    const mimeType = imageType === "jpeg" ? "image/jpeg" : "image/png";

    // Convert the binary data to a Base64 encoded string
    let imageSource = `data:${mimeType};base64,${Buffer.from(imageData.data)
      .toString("base64")
      .substring(19)}`;

    // Remove any padding characters from the end of the string
    //imageSource = imageSource.replace(/=+$/, '');
    imageSource = imageSource.slice(0, imageSource.length - 2);

    return imageSource;
  };

  if (Image != "") {
    return (
      <div style={{ width: 500, margin: "auto" }}>
        <div style={{ textAlign: "center" }}>
          <img
            src={getImageSource(Image)}
            style={{
              maxWidth: "500px",
              height: "400px",
              marginBottom: "20px",
              borderRadius: "20px",
            }}
          />
        </div>

        <form onSubmit={makeBooking}>
          <div class="form-group row">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              value={name}
              disabled
            />
          </div>
          <div class="form-group row">
            <label for="contactNo">Contact No</label>
            <input
              type="text"
              id="contactNo"
              name="contactNo"
              class="form-control"
              value={phone}
            />
          </div>
          <div class="form-group row">
            <label for="date">Date</label>
            <input
              type="text"
              id="date"
              name="date"
              class="form-control"
              value={AvailableDates}
              disabled
            />
          </div>
          <div class="form-group row">
            <label for="time">Time:</label>
            <input
              type="text"
              id="time"
              name="time"
              class="form-control"
              value={AvailableTime}
              disabled
            />
          </div>
          <div class="form-group row">
            <label for="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              class="form-control"
              min="0"
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>

          <div class="form-group row">
            <label for="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              class="form-control"
              value={`Rs. ${total}`}
              disabled
            />
          </div>

          {/* <input type="submit" value="Submit" /> */}

          <div style={{ marginBottom: "75px" }}>
            <button class="btn btn-dark" style={{ float: "left" }}>
              Back
            </button>
            <button
              type="submit"
              class="btn btn-success"
              style={{ float: "right" }}
            >
              Book
            </button>
            <br />
            <br /> <br /> <br />
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        <LoadingSpinner />
      </div>
    );
  }
}
