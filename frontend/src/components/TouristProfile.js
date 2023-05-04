import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import profileBackground from "../images/profileBackground.jpg";

export default function TouristProfile() {
  //adding a background image
  const backgroundImageUrl = `url(${profileBackground})`;

  const style = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  //creating variables for each function
  //const { paramemail } = useParams();
  const[paramemail]="subasinghesanuthi@gmail.com";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");


  //Use effect to fetch data which is in DB and display them in the form
  useEffect(() => {
    axios
      .get(`http://localhost:8070/tourist/get/email/${paramemail}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data[0].name);
        setAddress(res.data[0].address);
        setNic(res.data[0].nic);
        setPhone(res.data[0].phone);
        setEmail(res.data[0].Email);
      })
      .catch((err) => {
        alert("Error in fetching tourist data");
      });
  }, []);

  // //Function to update the data
  // function updateProfile(e) {
  //   e.preventDefault();

  //   const newTourist = {
  //     name,
  //     address,
  //     nic,
  //     phone,
  //     email,
  //     password,
  //   };
  //   axios
  //     .put(`http://localhost:8070/tourist/update/${email}`, newTourist)
  //     .then(() => {
  //       alert("Profile updated");
  //       window.location.replace("http://localhost:3000/tourist/");
  //     })
  //     .catch((err) => {
  //       alert("Update failure occured ! ");
  //     });
  // }

  //Function for creating  a prop for label
  function Label({ formLabel }) {
    return (
      <div>
        <label>{formLabel}</label>
      </div>
    );
  }

  return (
    <div style={style}>
      <div
        className="container"
        style={{ margin: "auto", maxWidth: "500px", padding: "20px" }}
      >
        <div
          style={{
            border: "1px solid black",
            padding: "100px",
            textAlign: "justify",
            borderRadius: "10px",
            height: "600px",
            width: "600px",
            borderRadius: "50% 50% 0 0",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <center>
            <h1>User Profile</h1>
          </center>

          <form>
            <Label formLabel="Name" />
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              required
              placeholder="Enter your name"
              pattern="[A-Za-z .]{1,100}"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <Label formLabel="Email" />
            <input
              type="email"
              id="email"
              value={email}
              class="form-control"
              placeholder="Ann@gmail.com"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <Label formLabel="Address" />
            <input
              type="address"
              id="address"
              value={nic}
              class="form-control"
              placeholder="92/E,Jane Street,New York"
              required
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />

            <Label formLabel="Phone" />
            <input
              type="phone"
              id="phone"
              value={phone}
              class="form-control"
              placeholder="Phone No"
              pattern="0[0-9]{9}"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <br></br>

            <button type="button" class="btn btn-dark">
              Back
            </button>
            <button
              type="button"
              class="btn btn-dark"
              style={{ float: "right" }}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
