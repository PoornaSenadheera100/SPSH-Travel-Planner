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
  const [paramemail] = "subasinghesanuthi@gmail.com";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");

  //Use effect to fetch data which is in DB and display them in the form
  useEffect(() => {
    axios
      .get(
        `http://localhost:8070/tourist/get/email/subasinghesanuthi@gmail.com`
      )
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

  //Function for creating  a prop for Form
  function Label({ formLabel, value}) {
    return (
      <div>
        <label>{formLabel}</label>
        <input class="form-control" value={value} />
      </div>
    );
  }


  //Prop to get the curved border
  function CurvedBorder(props){
    return(
    <div style={{
      border: "1px solid black",
      padding: "100px",
      textAlign: "justify",
      borderRadius: "10px",
      height: "600px",
      width: "600px",
      borderRadius: "50% 50% 0 0",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
    }}>
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
            <button type="button" class="btn btn-dark">Back</button>
            <button type="button"class="btn btn-dark"style={{ float: "right" }}>Update</button>
          </form>
        </CurvedBorder>
        </div>
        
      </div>
    
    
  );
}
