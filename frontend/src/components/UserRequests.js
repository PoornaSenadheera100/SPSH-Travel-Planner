import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserViewService from "./UserViewService";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function UserRequests() {
  if (sessionStorage.getItem("sTravPlaTsirout") === null) {
    window.location.replace("/");
  }

  let [status, setStatus] = useState(["Approved", "Rejected", "Pending"]);

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <h1 style={{ paddingBottom: "20px" }}>My Requests</h1>
      {status.map((status, index) => (
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
          <h3>Request {index + 1}</h3>
          <h4
            style={{
              color:
                status === "Rejected"
                  ? "red"
                  : status === "Approved"
                  ? "green"
                  : "black",
            }}
          >
            Status: {status}
          </h4>
          <a
            href="/tourist/requests/view"
            className="btn btn-secondary"
            style={{ float: "right" }}
          >
            View
          </a>
        </div>
      ))}

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
