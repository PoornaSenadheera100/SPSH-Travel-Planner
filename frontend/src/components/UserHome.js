import { useState } from "react";
import Button from "react-bootstrap/Button";
import UserServicesComponent from "./UserServicesComponent";

export default function UserHome() {
  if (sessionStorage.getItem("sTravPlaTsirout") === null) {
    window.location.replace("/");
  }

  let [location, setLocation] = useState("");
  const locations = ["Nuwara Eliya", "Colombo", "Kandy"]; //get the locations from DB to here

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
          if (
            city.toLowerCase().includes(location.toLowerCase()) &&
            location.toLowerCase() != ""
          ) {
            return <UserServicesComponent city={city} />;
          }
        })}
      </div>
    </div>
  );
}
