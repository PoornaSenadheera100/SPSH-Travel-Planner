import axios from "axios";
import { useEffect, useState } from "react";
import profileBackground from "../images/profileBackground.jpg";

export default function TouristProfile() {
  if (sessionStorage.getItem("sTravPlaTsirout") === null) {
    window.location.replace("/");
  }

  //adding a background image
  const backgroundImageUrl = `url(${profileBackground})`;

  const style = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  useEffect(() => {
    document.body.style.backgroundImage = `url(${profileBackground})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.height = "100vh";
    return () => {
      document.body.style.backgroundImage = null;
      document.body.style.backgroundSize = null;
      document.body.style.backgroundPosition = null;
      document.body.style.height = null;
    };
  }, []);

  //creating variables for each function
  const email = sessionStorage.getItem("touristEmail");
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");

  //Use effect to fetch data which is in DB and display them in the form
  useEffect(() => {
    axios
      // .get(`http://localhost:8070/tourist/get/email/${email}`)
      .get(
        `https://spsh-travel-planner-backend.onrender.com/tourist/get/email/${email}`
      )
      .then((res) => {
        console.log(res.data);
        setName(res.data[0].name);
        setNic(res.data[0].nic);
        setPhone(res.data[0].phone);
      })
      .catch((err) => {
        alert("Error in fetching tourist data");
      });
  }, [email]);

  //Function for creating  a prop for Form
  function Label({ formLabel, value }) {
    return (
      <div>
        <label>{formLabel}</label>
        <input class="form-control" value={value} />
      </div>
    );
  }

  //Prop to get the curved border
  function CurvedBorder(props) {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "100px",
          textAlign: "justify",
          height: "550px",
          width: "600px",
          borderRadius: "50% 50% 0 0",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div style={style}>
      <div
        className="container"
        style={{ margin: "auto", maxWidth: "500px", padding: "20px" }}
      >
        <CurvedBorder>
          <center>
            <h1>User Profile</h1>
          </center>

          <form>
            <Label formLabel="Name" value={name} />
            <Label formLabel="Email" value={email} />
            <Label formLabel="NIC" value={nic} />
            <Label formLabel="Phone" value={phone} />
            <br></br>
            <a href="/tourist">
              <button type="button" class="btn btn-dark">
                Back
              </button>
            </a>
            <a href={`/tourist/updateprofile/${email}`}>
              <button
                type="button"
                class="btn btn-dark"
                style={{ float: "right" }}
              >
                Update
              </button>
            </a>
          </form>
        </CurvedBorder>
      </div>
    </div>
  );
}
