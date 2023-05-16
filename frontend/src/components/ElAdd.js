//import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import elephant from "../images/elephant.png";

export default function CreateService(props) {
  const Service_ProviderId = sessionStorage.getItem("serviceProviderEmail");

  const [ServiceId, setServiceId] = useState(props.ServiceId);
  const [ServiceName, setServiceName] = useState(props.ServiceName);
  const [ServiceLocation, setServiceLocation] = useState(props.ServiceLocation);
  const [ServicePrice, setServicePrice] = useState(props.ServicePrice);
  const [ServiceDuration, setServiceDuration] = useState(props.ServiceDuration);
  const [AvailableTime, setAvailableTime] = useState(props.AvailableTime);
  const [AvailableDates, setAvailableDates] = useState(props.AvailableDates);
  const [Capacity, setCapacity] = useState(props.Capacity);
  const [Image, setImage] = useState("");

  const [block, setBlock] = useState(false);

  function handleProductImageChange(event) {
    const imageFile = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      setImage(reader.result);
      console.log(reader.result); //converts to base64.
    };
    reader.onerror = (error) => {
      console.log("Error : ", error);
    };
  }

  function checkServiceCode(serviceCode) {
    axios
      // .get(`http://localhost:8070/service/getservice/${serviceCode}`)
      .get(
        `https://spsh-travel-planner-backend.onrender.com/service/getservice/${serviceCode}/${Service_ProviderId}`
      )
      .then((res) => {
        if (res.data.length !== 0) {
          console.log(serviceCode);
          setBlock(true);
        } else {
          setBlock(false);
        }
      });
    console.log(block);
  }

  function submService(e) {
    //The below code prevents the normal behaviour of the submit button.
    e.preventDefault();

    if (props.forUpdate) {
      const updatedService = {
        Service_ProviderId,
        ServiceId,
        ServiceName,
        ServiceLocation,
        ServicePrice,
        ServiceDuration,
        AvailableTime,
        AvailableDates,
        Capacity,
      };

      axios
        .put(
          `https://spsh-travel-planner-backend.onrender.com/service/update/${Service_ProviderId}/${ServiceId}`,
          updatedService
        )
        .then(() => {
          alert("Service Updated");
          window.location.replace("/serviceprovider");
        })
        .catch((err) => {
          alert("Network Error...");
        });
    } else {
      //Create a javascript object. That passes the 3 attributes.
      const newService = {
        Service_ProviderId,
        ServiceId,
        ServiceName,
        ServiceLocation,
        ServicePrice,
        ServiceDuration,
        AvailableTime,
        AvailableDates,
        Capacity,
        Image,
      };

      //We pass the data from the frontend to the backend using the post http request.
      //Then the backend server responds with another http request.
      //This http response coming from the backend is handled using a seperate npm package called "axios" --> this is imported at the top following the installation.
      //axios has a method called post that passes 3 arguments usually, if there is authentication(No authentication meaning --> only 2 parameters)
      //Pass the backend URL as the first parameter.
      //Pass the JS object next as the second parameter, that holds the 3 attributes passed through the form.

      if (block === false) {
        axios
          // .post(`http://localhost:8070/service/add/`, newService)
          .post(
            `https://spsh-travel-planner-backend.onrender.com/service/add/`,
            newService
          )
          .then(() => {
            //After sending the data --> backend server responds --> if successfully added then an alert message is sent.
            alert(`Service Added`);
            window.location.replace("/serviceprovider");

            //After submitting the details ---> the values should be taken off from the fields ---> to do this --> the setters are assigned with ("")
            setServiceId("");
            setServiceName("");
            setServiceLocation("");
            setServicePrice();
            setServiceDuration("");
            setAvailableTime("");
            setAvailableDates("");
            setCapacity();
            setImage("");

            //Can move to the home page after deleting the data
            // window.location.replace("http://localhost:3000/item");

            //can move to the add student page after deleting the data.
            //window.location.replace("http://localhost:3000/inventory/add");
          })
          .catch((err) => {
            //After sending the data --> backend server responds --> if it wasn't successfully added --> the error is handled as an exception.
            alert(err);
          });
        //Pass the js object that we created in the console.(This will display the name, age,gender that's passed).
        //console.log(newStudent);
      } else {
        alert("This Service ID is already existing!");
      }
    }
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <center>
        <h1>{props.title}</h1>
      </center>
      <div className="container">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/serviceprovider/">
          <button
            type="button"
            class="btn btn-secondary"
            style={{ float: "left" }}
          >
            Back
          </button>
        </a>
      </div>
      <img
        src={elephant}
        width="50%"
        alt="Logo"
        style={{ display: "block", margin: "0 auto", marginBottom: "10px" }}
      ></img>
      <form
        className="container"
        onSubmit={submService}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, auto)",
          gridGap: "1rem",
          backgroundColor: "black",
          color: "white",
          marginTop: "5px",
          height: "300%",
        }}
      >
        <div className="form-grid">
          <div
            style={{ display: "flex", flexDirection: "column", width: "45%" }}
          >
            <label
              for="serviceID"
              style={{ fontWeight: "bold", fontSize: "20px", width: "100%" }}
            >
              Service ID
            </label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
              style={{ fontWeight: "bold", fontSize: "20px" }}
              value={ServiceId}
              className="form-control"
              required
              pattern="[S][0-9]{3}"
              title="Has to be of 4 characters"
              id="code"
              placeholder="Enter service code"
              onChange={(e) => {
                setServiceId(e.target.value);
                checkServiceCode(e.target.value);
              }}
            />
            <div required />
          </div>
        </div>
        <div className="form-group">
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "40%" }}>
            <label for="name" style={{ fontWeight: "bold", fontSize: "20px" }}>
              Service Name
            </label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
              style={{ fontWeight: "bold", fontSize: "20px" }}
              className="form-control"
              value={ServiceName}
              id="name"
              pattern="[a-zA-Z\s]+"
              required
              placeholder="Enter Service Name"
              onChange={(e) => {
                setServiceName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "40%" }}>
            <label
              for="location"
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                display: "inline-block",
                width: "200%",
              }}
            >
              Service Location
            </label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
              style={{ fontWeight: "bold", fontSize: "20px" }}
              value={ServiceLocation}
              className="form-control"
              required
              id="location"
              placeholder="Enter Service Location"
              onChange={(e) => {
                setServiceLocation(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "30%" }}>
            <label for="price" style={{ fontWeight: "bold", fontSize: "20px" }}>
              Service Price
            </label>
          </div>

          <div class="col-sm-10">
            <input
              type="number"
              style={{ fontWeight: "bold", fontSize: "20px" }}
              value={ServicePrice}
              className="form-control"
              required
              id="price"
              min="0"
              placeholder="Enter Price "
              onChange={(e) => {
                setServicePrice(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "30%" }}>
            <label
              for="duration"
              style={{ fontWeight: "bold", fontSize: "20px", width: "200%" }}
            >
              Service Duration
            </label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
              style={{ fontWeight: "bold", fontSize: "20px" }}
              value={ServiceDuration}
              className="form-control"
              required
              id="duration"
              min="0"
              placeholder="Enter Duration "
              onChange={(e) => {
                setServiceDuration(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "40%" }}>
            <label
              for="time"
              style={{ fontWeight: "bold", fontSize: "20px", width: "200%" }}
            >
              Available Time
            </label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
              style={{ fontWeight: "bold", fontSize: "20px" }}
              value={AvailableTime}
              className="form-control"
              required
              id="time"
              min="0"
              placeholder="Enter Available Time "
              onChange={(e) => {
                setAvailableTime(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "30%" }}>
            <label
              for="dates"
              style={{ fontWeight: "bold", fontSize: "20px", width: "200%" }}
            >
              Available Dates
            </label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
              style={{ fontWeight: "bold", fontSize: "20px", width: "100%" }}
              value={AvailableDates}
              className="form-control"
              required
              id="dates"
              min="0"
              placeholder="Enter Available Dates "
              onChange={(e) => {
                setAvailableDates(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "40%" }}>
            <label
              for="capacity"
              style={{ fontWeight: "bold", fontSize: "20px", width: "200%" }}
            >
              Capacity
            </label>
          </div>

          <div class="col-sm-10">
            <input
              type="number"
              style={{ fontWeight: "bold", fontSize: "20px" }}
              value={Capacity}
              className="form-control"
              required
              id="capacity"
              min="0"
              placeholder="Enter Capacity "
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
            />
          </div>
        </div>
        <br></br>
        {props.hidden ? (
          <></>
        ) : (
          <div class="col-sm-10">
            <label
              htmlFor="service_image"
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              Image
            </label>
            <input
              type="file"
              style={{ fontWeight: "bold", fontSize: "20px" }}
              id="image"
              placeholder="Upload Image"
              required
              onChange={(e) => {
                handleProductImageChange(e);
              }}
            />
          </div>
        )}
        <center>
          <button
            type="submit"
            class="btn btn-primary"
            style={{ float: "center", fontWeight: "bold", fontSize: "20px" }}
          >
            Submit
          </button>
        </center>
        {/* <a href="/adminhome/managesellers">
          <Button variant="dark">Back</Button>
        </a> */}
      </form>
    </div>
  );
}
