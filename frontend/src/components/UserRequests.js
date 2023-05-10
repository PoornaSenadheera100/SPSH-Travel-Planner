import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import UserViewService from "./UserViewService";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function UserRequests() {
  if (sessionStorage.getItem("sTravPlaTsirout") === null) {
    window.location.replace("/");
  }

  const touristEmail = sessionStorage.getItem("touristEmail");
  const [requests, setRequests] = useState([]);

  let [status, setStatus] = useState(["Approved", "Rejected", "Pending"]);

  useEffect(() => {
    function getRequest() {
      axios
        .get(`http://localhost:8070/servicerequest/get/email/${touristEmail}`)
        .then((res) => {
          console.log(res.data);
          setRequests(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getRequest();
  }, []);

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div>
        {requests.map((request) => (
          <div>
            <h1 style={{ paddingBottom: "20px" }}>My Requests</h1>
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
              <h3>Request</h3>
              {request.bookingId}
              <h4
                style={{
                  color:
                    request.status === "Rejected"
                      ? "red"
                      : request.status === "Approved"
                      ? "green"
                      : "black",
                }}
              >
                Status: {request.status}
              </h4>
              <a
                href="/tourist/requests/view"
                className="btn btn-secondary"
                style={{ float: "right" }}
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* pass status as prop to show cancel button according to that */}
      {/* <Router>
        <Route
          path="/userHome/requests/view"
          exact
          render={(props) => <UserViewService {...props} status={status} />}
        />
      </Router> */}
    </div>
  );
}
