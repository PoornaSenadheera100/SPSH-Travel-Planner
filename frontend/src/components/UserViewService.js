import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserViewService() {
  if (sessionStorage.getItem("sTravPlaTsirout") === null) {
    window.location.replace("/");
  }

  const { bookingId } = useParams();
  const [serviceName, setServiceName] = useState("");
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  function getServiceInfo() {
    axios
      .get(`http://localhost:8070/servicerequest/get/bookingId/${bookingId}`)
      .then((res) => {
        console.log(res.data);
        setServiceName(res.data[0].serviceName);
        setName(res.data[0].name);
        setContactNo(res.data[0].contactNo);
        setDate(res.data[0].date);
        setTime(res.data[0].time);
        setQuantity(res.data[0].quantity);
        setPrice(res.data[0].price);
        setStatus(res.data[0].status);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  function deleteService(e) {
    e.preventDefault();
    axios
      .delete(
        `http://localhost:8070/servicerequest/delete/bookingId/${bookingId}`
      )
      .then(() => {
        alert("Service Request Deleted");
        window.location.replace("/tourist/requests");
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    getServiceInfo();
  }, []);

  return (
    <div style={{ width: 500, margin: "auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>{serviceName}</h2>
      </div>
      <form>
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
            value={contactNo}
            disabled
          />
        </div>
        <div class="form-group row">
          <label for="date">Date</label>
          <input
            type="text"
            id="date"
            name="date"
            class="form-control"
            value={date}
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
            value={time}
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
            disabled
          />
        </div>

        <div class="form-group row">
          <label for="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            class="form-control"
            value={`Rs. ${price}`}
            disabled
          />
        </div>

        <div class="form-group row">
          <label for="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            class="form-control"
            value={status}
            disabled
          />
        </div>
        <div style={{ marginBottom: "75px" }}>
          <a
            class="btn btn-dark"
            style={{ float: "left" }}
            href="/tourist/requests/"
          >
            Back
          </a>

          {(status === "Pending" || status === "Approved") && (
            <button
              class="btn btn-danger"
              style={{ float: "right" }}
              onClick={(e) => {
                if (window.confirm("Are you sure you want to cancel?")) {
                  deleteService(e);
                  // window.location.replace(
                  //   "http://localhost:3000/tourist/requests/"
                  // );
                }
              }}
            >
              Cancel
            </button>
          )}
          <br />
          <br />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}
