import axios from "axios";
import { useEffect, useState } from "react";

export default function UserServiceBookingForm(props) {
  const email = sessionStorage.getItem("touristEmail");
  let { serviceProviderId, serviceId } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ServicePrice, setServicePrice] = useState();
  const [AvailableTime, setAvailableTime] = useState("");
  const [AvailableDates, setAvailableDates] = useState("");
  const [Image, setImage] = useState("");
  // let price = 500;
  let [quantity, setQuantity] = useState(1);

  //convert Service price to number
  let total = Number(ServicePrice) * quantity;

  function getTouristInformation() {
    axios
      .get(`http://localhost:8070/tourist/get/email/${email}`)
      .then((res) => {
        console.log(res.data);
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
        console.log(res.data);
        console.log(serviceProviderId);
        setServicePrice(res.data[0].ServicePrice);
        setAvailableTime(res.data[0].AvailableTime);
        setAvailableDates(res.data[0].AvailableDates);
        setImage(res.data[0].Image);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getTouristInformation();
    getServiceDetails();
  });

  return (
    <div style={{ width: 500, margin: "auto" }}>
      <form>
        <div class="form-group row">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            // value={formData.name}
            value={name}
            disabled
            // onChange={handleInputChange}
          />
        </div>
        {/* <br /> */}
        <div class="form-group row">
          <label for="contactNo">Contact No</label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            class="form-control"
            // value={formData.name}
            value={phone}
            // onChange={handleInputChange}
          />
        </div>
        <div class="form-group row">
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            class="form-control"
            value={AvailableDates}
            // onChange={handleInputChange}
          />
          {/* <br /> */}
        </div>
        <div class="form-group row">
          <label for="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            class="form-control"
            value={AvailableTime}
            // onChange={handleInputChange}
          />
          {/* <br /> */}
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
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          {/* <br /> */}
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
            // onChange={handleInputChange}
          />
        </div>

        {/* <input type="submit" value="Submit" /> */}

        <div style={{ marginBottom: "75px" }}>
          <button class="btn btn-dark" style={{ float: "left" }}>
            Back
          </button>
          <button class="btn btn-success" style={{ float: "right" }}>
            Book
          </button>
          <br />
          <br /> <br /> <br />
        </div>
      </form>
    </div>
  );
}
