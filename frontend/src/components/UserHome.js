import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import UserServicesComponent from "./UserServicesComponent";
import axios from "axios";
// import userHomeBG from "../images/userHomeBG.jpg";

export default function UserHome() {
  if (sessionStorage.getItem("sTravPlaTsirout") === null) {
    window.location.replace("/");
  }

  //adding a background image
  // const backgroundImageUrl = `url(${userHomeBG})`;

  // const style = {
  //   backgroundImage: backgroundImageUrl,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   height: "100vh",
  // };

  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const [serviceNames, setServiceNames] = useState([]);
  let locationsFetched = false;

  function getServices() {
    axios
      // .get(`http://localhost:8070/service/get/servicedetails/`)
      .get(
        `https://spsh-travel-planner-backend.onrender.com/service/get/servicedetails/`
      )
      .then((res) => {
        // console.log(res.data);

        if (locationsFetched == false) {
          for (let i = 0; i < res.data.length; i++) {
            locations.push({
              location: res.data[i].ServiceLocation,
              name: res.data[i].ServiceName,
              serviceId: res.data[i].ServiceId,
              serviceProviderId: res.data[i].Service_ProviderId,
            });
            // locations.push(res.data[i].ServiceLocation);
            // serviceNames.push(res.data[i].ServiceName);
          }
          locationsFetched = true;
        }
        // console.log(locations);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getServices();
    console.log("Hi");
  }, []);

  return (
    <div class="container">
      <div class="button-row">
        <a
          href="/"
          style={{ float: "right" }}
          onClick={() => {
            sessionStorage.removeItem("sTravPlaTsirout");
          }}
        >
          <Button variant="danger">Signout</Button>{" "}
        </a>
        <a href="/tourist/userprofile">
          <button
            class="btn btn-dark"
            style={{ marginBottom: "10px", width: "15%" }}
          >
            My Profile
          </button>
        </a>
        <br />
        <a
          href="/tourist/requests/"
          class="btn btn-dark"
          style={{ marginBottom: "10px", width: "15%" }}
        >
          My Requests
        </a>
        <br />
      </div>
      <div
        class="centered-form"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div class="form-group">
          <label>Enter Location</label>
          <br />
          <input
            type="text"
            id="location"
            placeholder="Eg: Nuwara Eliya"
            required
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div>
        {/* Display Component based on location */}
        {locations.map((city) => {
          let cityName = city.location ? city.location.toLowerCase() : "";
          if (cityName.includes(location.toLowerCase()) && location !== "") {
            return (
              <UserServicesComponent
                city={city.location}
                serviceName={city.name}
                serviceId={city.serviceId}
                serviceProviderId={city.serviceProviderId}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
