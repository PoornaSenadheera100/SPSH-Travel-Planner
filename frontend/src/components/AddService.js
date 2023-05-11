// rafce --> this command will automatically generate the basic code.

//import the React library here, which was assigned to a variable callled "react" in package.json
//The useState function in 'ReactHook' will be called in the import statement. ---> this helps to define a "state" in a function based approach, without the use of a constructor.
//If we don't use the "Export default" --> have to include the curly brackets surrounding "useState"
//First thing it returns --->This "useState" returns the value of the state.(The counter we developed using the "increment" button for instance)
//Second thing it returns ---> The "useState" also has the respective function to be implemented that reveals how the state value is updated.
import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
//import ReactDOM from 'react-dom';
//Import axios from the axios package we installed.This is needed to move the data from the frontend to the backend via an http request
import axios from "axios";
//const fs = require('fs');

export default function AddService() {
  /*
  if (sessionStorage.getService("sTravPlaNimda") === null) {
    window.location.replace("/serviceprovider");
  }
*/
  //Create 3 variables/states for name,age and gender
  //The initialization of these 3 states have been done below.
  //It is using the setName/setAge/setGender that we assign values to the states of name/age/gender respectively.
  //As the initial/default value we pass ("") in the useState of each respective state.
  //onChange is an event
  //The values passed in the text field of the form should be assigned to the respective state(name,age,gender) --> we do this using the onChange event available.
  //Value given in the input field to record he name should be passed to the state "name" respectively. ---> could be done using the setName method.
  //In the setName method we pass an argument ---> (e.target.value) --> what happens in taget.value is ---> value entered in the text field to input the name will be assigned to the state of "name".
  //Same process applies to the other 2 variables as well.
  const Service_ProviderId = sessionStorage.getItem("serviceProviderEmail");
  const [ServiceId, setServiceId] = useState("");
  const [ServiceName, setServiceName] = useState("");
  const [ServiceLocation, setServiceLocation] = useState();
  const [ServicePrice, setServicePrice] = useState();
  const [ServiceDuration, setServiceDuration] = useState("");
  const [AvailableTime, setAvailableTime] = useState("");
  const [AvailableDates, setAvailableDates] = useState("");
  const [Capacity, setCapacity] = useState();
  const [Image, setImage] = useState("");
  const [serviceIds, setServiceIds] = useState([]);

  // const Service_ProviderId = sessionStorage.getService("sellerEmail");

  const [block, setBlock] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8070/service/")
      .then((res) => {
        console.log(res.data);
        setServiceIds(res.data.ProductId);
      })
      .catch((err) => {
        alert(err.message);
      });
    console.log("Hi");
  }, []);

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

  function sendData(e) {
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

  // --> closing bracket of "Duplicate Record methods"}

  return (
    <div className="container">
      <h1>Add Service</h1>
      <form onSubmit={sendData}>
        <div className="form-group">
          <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
            <label for="serviceID">Service ID</label>
          </div>

          <div class="col-sm-10">
            <input
              type="text"
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
        <br></br>
        <button type="submit" class="btn btn-success">
          Submit
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a type="button" href="/service" class="btn btn-secondary">
          Back
        </a>
      </form>
    </div>
  );
}
