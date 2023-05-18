import { useEffect, useState } from "react";
import axios from "axios";

export default function UserRequests() {
  if (sessionStorage.getItem("sTravPlaTsirout") === null) {
    window.location.replace("/");
  }

  const touristEmail = sessionStorage.getItem("touristEmail");
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    function getRequest() {
      axios
        // .get(`http://localhost:8070/servicerequest/get/email/${touristEmail}`)
        .get(
          `https://spsh-travel-planner-backend.onrender.com/servicerequest/get/email/${touristEmail}`
        )
        .then((res) => {
          console.log(res.data);
          setRequests(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getRequest();
  }, [touristEmail]);

  return (
    <div
      className="container"
      style={{ marginTop: "20px", paddingBottom: "20px" }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ paddingBottom: "20px" }}>My Requests</h1>
          <a class="btn btn-dark" href="/tourist/">
            Back
          </a>
        </div>
        <div>
          {requests.map((request) => (
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
              <h3>ID {request.bookingId}</h3>

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
              <button
                className="btn btn-secondary"
                style={{ float: "right" }}
                onClick={() =>
                  window.location.replace(
                    `/tourist/requests/view/${request.bookingId}`
                  )
                }
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
