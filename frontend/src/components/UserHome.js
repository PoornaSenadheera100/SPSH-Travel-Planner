import { useState } from "react";
import UserServicesComponent from "./UserServicesComponent";

export default function UserHome() {
  let [location, setLocation] = useState("");
  const locations = ["Nuwara Eliya", "Colombo", "Kandy"]; //get the locations from DB to here

  return (
    <div class="container">
      <div class="button-row">
        <button
          class="btn btn-dark"
          style={{ marginBottom: "10px", width: "15%" }}
        >
          My Profile
        </button>
        <br />
        <button
          class="btn btn-dark"
          style={{ marginBottom: "10px", width: "15%" }}
        >
          My Requests
        </button>
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
          if (location.toLowerCase() === city.toLowerCase()) {
            return <UserServicesComponent city={city} />;
          }
        })}
      </div>
    </div>
  );
}
