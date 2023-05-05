//import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";

export default function CreateService(props) {
  const [Service_ProviderId, setService_ProviderId] = useState(
    "suritharawwala@gmail.com"
  );

  const [ServiceId, setServiceId] = useState({});
  const [ServiceName, setServiceName] = useState({});
  const [ServiceLocation, setServiceLocation] = useState({});
  const [ServicePrice, setServicePrice] = useState({});
  const [ServiceDuration, setServiceDuration] = useState({});
  const [AvailableTime, setAvailableTime] = useState({});
  const [AvailableDates, setAvailableDates] = useState({});
  const [Capacity, setCapacity] = useState({});
  const [Image, setImage] = useState("");
  const [serviceIds, setServiceIds] = useState({});

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
      .get(`http://localhost:8070/service/getservice/${serviceCode}`)
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
        .post(`http://localhost:8070/service/add/`, newService)
        .then(() => {
          //After sending the data --> backend server responds --> if successfully added then an alert message is sent.
          alert(`Service Added`);
          window.location.replace("http://localhost:3000/service");

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

  function checkServiceCode(serviceCode) {
    axios
      .get(`http://localhost:8070/service/getservice/${serviceCode}`)
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

  return (
    <div>
      <center>
        <h1>{props.title}</h1>
      </center>

      <form onSubmit={submService}>
        <div className="form-group">
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
            <label for="serviceID">Service ID</label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
              value={props.ServiceId}
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
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
            <label for="name">Service Name</label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={props.ServiceName}
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
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "30%" }}>
            <label for="location">Service Location</label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
              value={props.ServiceLocation}
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
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
            <label for="price">Service Price</label>
          </div>

          <div class="col-sm-10">
            <input
              type="number"
              value={props.ServicePrice}
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
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
            <label for="duration">Service Duration</label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
              value={props.ServiceDuration}
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
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
            <label for="time">Available Time</label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={props.AvailableTime}
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
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
            <label for="dates">Available Dates</label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
              value={props.AvailableDates}
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
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
            <label for="capacity">Capacity</label>
          </div>

          <div class="col-sm-10">
            <input
              type="number"
              value={props.Capacity}
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
            <label htmlFor="service_image">Image</label>
            <input
              type="file"
              id="image"
              placeholder="Upload Image"
              required
              onChange={(e) => {
                handleProductImageChange(e);
              }}
            />
          </div>
        )}
        <button
          type="submit"
          class="btn btn-primary"
          style={{ float: "right" }}
        >
          Submit
        </button>

        {/* <a href="/adminhome/managesellers">
          <Button variant="dark">Back</Button>
        </a> */}
      </form>
    </div>
  );
}
