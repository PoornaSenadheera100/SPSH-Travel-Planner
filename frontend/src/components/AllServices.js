//There's another inbuilt method called useEffect in React Hook which will be used when fetching details --> thus, it should also be imported.
//Be it function based or class based, "React" must be imported.
//import the React library here, which was assigned to a variable callled "react" in package.json
import React, { useState, useEffect } from "react";

import { Buffer } from "buffer";
//import Rater from "react-rater";
//import "react-rater/lib/react-rater.css";

//Import the axios pacakge to read the data from the backend to the frontend.
import axios from "axios";

//Used for navigation purposes(after clicking on update button --> moves to update page)
import { useHistory } from "react-router-dom";

//export the function of "AllServices"
export default function AllServices() {
  if (sessionStorage.getItem("sTravPlaVresVorp") === null) {
    window.location.replace("/");
  }

  //Creating an array that passes 2 values.
  //First value of "students" returns the state.
  //Second value of "setStudents" returns the method that sets the values to the statae, or the one that changes the value of the state.
  //The initial/default value of the useState is an empty array.([])
  const [services, setService] = useState([]);
  const [ServiceId, setServiceId] = useState("");

  const Service_ProviderId = sessionStorage.getItem("serviceProviderEmail");

  //assigning the method of useHistory to the variable "history"
  let history = useHistory();

  //const Service_ProviderId = sessionStorage.getService("sellerEmail");

  useEffect(() => {
    //There's another function called getStudents defined inside the arrow function.
    function getService() {
      //axois can go to the mentioned URL and get the backend data.
      //axois uses the "get" method --> when retrieving data from the DB --> since that is the http request that is specified in the BACKEND
      //If data was successfully fetched, then ---> the data objects sent as an array is passed to the seStudent method.
      axios
        // .get(`http://localhost:8070/service/${Service_ProviderId}`)
        .get(
          `https://spsh-travel-planner-backend.onrender.com/service/${Service_ProviderId}`
        )
        .then((res) => {
          console.log(res.data);
          setService(res.data);

          //if it wasn't successfully fetched, then the error is displayed and handled as an exception.
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    //Invoke the function once its implemented.
    getService();
  }, []);

  //Get the image source.
  /*
    const getImageSource = (imageData) => {

        //Converting the String to an image happens here.
        let imageSource = `data:image/png;base64,${Buffer.from(imageData.data).toString('base64').substring(19)}`;
        //Hilarina (0,3) --> Hil
        //We reduce 2 here --> because, the last 2 values in the basecode is generally of 2 equal characters.(==)
        imageSource = imageSource.slice(0,imageSource.length-2);
        return imageSource;
      };*/

  // use the mimeType variable to set the MIME type for the image source URL

  const getImageSource = (imageData, imageType) => {
    // Set the MIME type based on the image type
    const mimeType = imageType === "jpeg" ? "image/jpeg" : "image/png";

    // Convert the binary data to a Base64 encoded string
    let imageSource = `data:${mimeType};base64,${Buffer.from(imageData.data)
      .toString("base64")
      .substring(19)}`;

    // Remove any padding characters from the end of the string
    //imageSource = imageSource.replace(/=+$/, '');
    imageSource = imageSource.slice(0, imageSource.length - 2);

    return imageSource;
  };

  return (
    <div className="container">
      <a href="/service">
        <button class="btn btn-dark">Back</button>
      </a>
      <center>
        <h1>All Services</h1>
      </center>
      <br></br>
      <table className="table table-borderless">
        <div className="row">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                border: "none",
                width: "1060px",
              }}
              onClick={() => {
                //history.push moves from the current page.
                //history.push(`/update/${student._id}`);
                //window.location also redirects to another page.(delete page with the ID)
                window.location.replace(`/serviceprovider/add`);
              }}
            >
              Add Service
            </button>
            <br></br>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 300px))",
            gap: "5rem",
          }}
        >
          {services.map((service) => (
            <div
              style={{
                display: "flex",
                background: "linear-gradient(to bottom, #28282B, white)",
                color: "white",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
                border: "2px solid #ccc",
              }}
              key={service.ServiceId}
            >
              <img
                src={getImageSource(service.Image)}
                style={{ maxWidth: "150px", height: "150px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                  {service.ServiceName}
                </h3>
                <p style={{ marginBottom: "0.5rem", textAlign: "center" }}>
                  {service.Location}
                </p>
                <span style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Rs.{service.ServicePrice}
                </span>
                {/* <a href="/BuyerViewItem"><button style={{ padding: '0.5rem', backgroundColor: '#008CBA', color: 'white', border: 'none', cursor: 'pointer' }}>View</button></a> */}
                <span style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {service.Duration}
                </span>
                <span style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {service.AvailableTime}
                </span>
                <span style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {service.AvailableDates}
                </span>
                <span style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {service.Capacity}
                </span>
                <button
                  class="btn btn-success"
                  style={{
                    maxWidth: "100%",
                    height: "40px",
                    width: "120px",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => {
                    window.location.replace(
                      `/serviceprovider/getservice/${service.ServiceId}`
                    );
                  }}
                >
                  View
                </button>
                <br></br>
                <div>
                  <button
                    class="btn btn-warning"
                    style={{
                      maxWidth: "100%",
                      height: "40px",
                      width: "120px",
                      whiteSpace: "nowrap",
                    }}
                    onClick={() => {
                      window.location.replace(
                        `/serviceprovider/update/${service.ServiceId}`
                      );
                    }}
                  >
                    Update
                  </button>
                </div>{" "}
                <br></br>
                <div>
                  <button
                    className="btn btn-danger btn-sm"
                    style={{
                      maxWidth: "100%",
                      height: "40px",
                      width: "120px",
                      whiteSpace: "nowrap",
                    }}
                    onClick={() => {
                      var response = window.confirm(
                        "Are you sure you want to delete this Service?"
                      );
                      if (response) {
                        axios
                          // .delete(
                          //   `http://localhost:8070/service/delete/${service.Service_ProviderId}/${service.ServiceId}`
                          // )
                          .delete(
                            `https://spsh-travel-planner-backend.onrender.com/service/delete/${service.Service_ProviderId}/${service.ServiceId}`
                          )
                          .then(() => {
                            alert("Service Deleted");
                            window.location.replace("/serviceprovider/");
                          })
                          .catch((err) => {
                            alert(err);
                          });
                      }
                    }}
                  >
                    Delete <i class="fa fa-trash-o fa-lg"></i>
                  </button>
                </div>
                <br></br>
              </div>
            </div>
          ))}
        </div>
      </table>
    </div>
  );
}
