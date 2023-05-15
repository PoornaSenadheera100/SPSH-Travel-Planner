import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function AdminRequestApproval(props) {
  const [bookings, setBookings] = useState([]);

  function getAllBookings() {
    axios
      .get(`http://localhost:8070/servicerequest/`)
      .then((res) => {
        console.log("hi");
        console.log(res.data);
        setBookings(res.data);
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
    getAllBookings();
  }, []);

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <h1 style={{ paddingBottom: "20px", textAlign: "center" }}>
        {props.title}
      </h1>
      {bookings.map((booking) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid black",
            margin: "10px",
            borderRadius: "5px",
            padding: "20px",
          }}
        >
          <h3>Request {booking.bookingId}</h3>
          <a
            className="btn btn-secondary"
            style={{ float: "right" }}
            onClick={() =>
              window.location.replace(
                `/admin/managerequests/view/search/single/${booking.bookingId}`
              )
            }
          >
            View
          </a>
          <a
            // href="/tourist/requests/view"
            className="btn btn-success"
            style={{ float: "right" }}
            onClick={() => {
              if (window.confirm("Are you sure you want to approve?")) {
                const status = "Approved";
                updateServiceStatus(status, booking.bookingId);
              }
            }}
          >
            Approve
          </a>
          <a
            className="btn btn-danger"
            style={{ float: "right" }}
            onClick={() => {
              if (window.confirm("Are you sure you want to reject?")) {
                const status = "Rejected";
                updateServiceStatus(status, booking.bookingId);
              }
            }}
          >
            Reject
          </a>
        </div>
      ))}
    </div>
  );
}
