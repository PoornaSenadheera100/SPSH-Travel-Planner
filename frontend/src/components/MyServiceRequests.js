import axios from "axios";
import { useEffect, useState } from "react";

export default function MyServiceRequest() {
  if (sessionStorage.getItem("sTravPlaVresVorp") === null) {
    window.location.replace("/");
  }

  const touristEmail = sessionStorage.getItem("touristEmail");
  const serviceProvEmail = sessionStorage.getItem("sTravPlaTsirout");
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8070/servicerequest/get/email/${touristEmail}/${serviceProvEmail}`
      )
      .then((res) => {
        setServices(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <a href="/service">
        <button
          className="btn btn-dark"
          style={{
            display: "inline-block",
            textAlign: "left",
            marginLeft: "10px",
          }}
        >
          Back
        </button>
      </a>
      <div className="container">
        <center>
          <h1>Bookings Made</h1>
        </center>
        {services.length === 0 && <h1>No Bookings</h1>}
        {services.length !== 0 && (
          <table className="table table-borderless">
            <tr>
              <th>
                <center>Tourist Name</center>
              </th>
              <th>
                <center>Service Name</center>
              </th>
              <th>
                <center>Contact No</center>
              </th>
              <th>
                <center>No. of People</center>
              </th>
              <th></th>
            </tr>

            <tbody>
              {services.map((service) => (
                <tr>
                  <td>
                    <center>{service.orderRef}</center>
                  </td>
                  <td>
                    <center>{service.paymentmethod}</center>
                  </td>
                  <td>
                    <center>{service.status}</center>
                  </td>
                  <td
                    style={{
                      color:
                        order.appStatus === "Rejected"
                          ? "red"
                          : order.appStatus === "Approved"
                          ? "green"
                          : "orange",
                    }}
                  >
                    <center>{service.appStatus}</center>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => {
                        window.location.replace(
                          `http://localhost:3000/buyerhome/myorders/${order.orderRef}`
                        );
                      }}
                    >
                      View <i class="fa fa-pencil"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
