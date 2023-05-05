import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function UserRequests() {
  let [status, setStatus] = useState(["Approved", "Rejected", "Pending"]);
  let history = useHistory();

  function handleViewClick() {
    history.push({
      pathname: "/userHome/requests/view",
      state: { staus: status },
    });
  }

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
          <button
            href="/userHome/requests/view"
            className="btn btn-secondary"
            style={{ float: "right" }}
            onClick={handleViewClick}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}
