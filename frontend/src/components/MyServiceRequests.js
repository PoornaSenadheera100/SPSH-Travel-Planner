import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MyServiceRequests() {
  if (sessionStorage.getItem("sTravPlaVresVorp") === null) {
    window.location.replace("/");
  }

  const [serviceRequests, setServiceRequests] = useState([]);
  const Service_ProviderId = sessionStorage.getItem("serviceProviderEmail");

  useEffect(() => {
    const getServiceRequests = async () => {
      try {
        // const response = await axios.get(
        //   `http://localhost:8070/servicerequest/myrequest/${Service_ProviderId}`
        // );
        const response = await axios.get(
          `https://spsh-travel-planner-backend.onrender.com/servicerequest/myrequest/${Service_ProviderId}`
        );
        response.data.filter(
          (serviceRequest) => serviceRequest.status === "Approved"
        );
        //To check if data is fetched properly.
        console.log(response.data);
        setServiceRequests(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    getServiceRequests();
  }, [Service_ProviderId]);

  return (
    <div>
      <button
        class="btn btn-dark"
        style={{
          maxWidth: "100%",
          height: "40px",
          width: "120px",
          margin: "40px",
          whiteSpace: "nowrap",
        }}
        onClick={() => {
          //moves to this url.
          window.location.replace(`/serviceprovider`);
        }}
      >
        Back
      </button>
      <center>
        <h2>Service Requests Accepted</h2>
      </center>
      <ul>
        <table className="table table-borderless">
          <tr>
            <th>
              <center>Tourist Name</center>
            </th>
            <th>
              <center>Tourist Contact No</center>
            </th>
            <th>
              <center>No.of People</center>
            </th>
            <th></th>
          </tr>
          {serviceRequests.map((servicerequest) => (
            <tbody>
              <td>
                <center>{servicerequest.name} </center>
              </td>
              <td>
                <center>{servicerequest.contactNo}</center>
              </td>
              <td>
                <center>{servicerequest.quantity}</center>
              </td>
            </tbody>
          ))}
        </table>
      </ul>
    </div>
  );
}
