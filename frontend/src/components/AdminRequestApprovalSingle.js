import { useEffect, useState } from "react";
import AdminServiceSearch from "./AdminServiceSearch";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AdminRequestApprovalSingle() {
  if (sessionStorage.getItem("sTravPlaNimda") === null) {
    window.location.replace("/");
  }

  const { bookingId } = useParams();
  const [name, setName] = useState();
  const [contactNo, setContactNo] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  function getServiceInfo() {
    axios
      .get(`http://localhost:8070/servicerequest/get/bookingId/${bookingId}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data[0].name);
        setContactNo(res.data[0].contactNo);
        setDate(res.data[0].date);
        setTime(res.data[0].time);
        setQuantity(res.data[0].quantity);
        setPrice(res.data[0].price);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  function updateServiceStatus(status, bookingId) {
    const updateStatus = {
      status,
    };

    axios
      .put(
        `http://localhost:8070/servicerequest/update/bookingId/${bookingId}`,
        updateStatus
      )
      .then((res) => {
        console.log(res.data);
        window.location.replace("/admin/managerequests/view");
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
  }

  useEffect(() => {
    getServiceInfo();
  }, []);

  return (
    <div style={{ width: 800 }}>
      <div class="row">
        <div class="col">
          <div style={{ textAlign: "center" }}>
            <h2>Booking Details</h2>
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
            {/* <br /> */}
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

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "75px",
              }}
            >
              <a
                className="btn btn-dark"
                href="http://localhost:3000/admin/managerequests/view/"
              >
                Back
              </a>
              <div>
                <button
                  className="btn btn-success"
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    if (window.confirm("Are you sure you want to approve?")) {
                      const status = "Approved";
                      updateServiceStatus(status, bookingId);
                      window.location.replace("/admin/managerequests/view");
                    }
                  }}
                >
                  Approve
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to reject?")) {
                      const status = "Rejected";
                      updateServiceStatus(status, bookingId);
                    }
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col" style={{ paddingLeft: "100px" }}>
          <AdminServiceSearch bookingId={bookingId} />
        </div>
      </div>
    </div>
  );
}
