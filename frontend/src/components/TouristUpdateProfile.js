import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useEffect} from "react";
export default function TouristUpdateProfile() {
  if (sessionStorage.getItem("sTravPlaTsirout") === null) {
    window.location.replace("/");
  }

  const [name, setName] = useState({});
  const email = sessionStorage.getItem("touristEmail");
  const [phone, setPhone] = useState({});
  const [nic, setNic] = useState({});
  const [password, setPassword] = useState({});
  const [rePassword, setRePassword] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8070/tourist/get/email/${email}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data[0].name);
        setNic(res.data[0].nic);
        setPhone(res.data[0].phone);
        //setEmail(res.data[0].email);
        setPassword(res.data[0].password);
      })
      .catch((err) => {
        alert("Error in fetching tourist data");
      });
  }, []);

  return (
<div>
    
      <center>
        <h1>Profile Update </h1>
      </center>
<div  className="container"
    style={{ margin: "auto", maxWidth: "1000px", padding: "20px" }}>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          class="form-control"
          value={name}
          placeholder="Enter your name"
          pattern="[A-Za-z .]{1,100}"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <br></br>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          value={email}
          placeholder="abc@gmail.com"
          required
          // onChange={(e) => {
          //   setEmail(e.target.value);
          // }}
        />

        <br></br>

        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          id="phone"
          class="form-control"
          value={phone}
          placeholder="Phone No"
          pattern="0[0-9]{9}"
          required
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />

        <br></br>

        <label htmlFor="nic">NIC</label>
        <input
          type="text"
          id="nic"
          class="form-control"
          value={nic}
          placeholder="NIC"
          required
          onChange={(e) => {
            setNic(e.target.value);
          }}
        />

        <br></br>

        <label htmlFor="newpassword">New Password</label>
        <input
          type="password"
          id="newpassword"
          class="form-control"
          value={password}
          placeholder="Password"
          minLength="8"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <br></br>

        <label htmlFor="repassword">Re-enter Password</label>
        <input
          type="password"
          id="repassword"
          class="form-control"
          placeholder="Password"
          required
          onChange={(e) => {
            setRePassword(e.target.value);
          }}
        />

        <br></br>

        <button
          type="submit"
          class="btn btn-primary"
          style={{ float: "right" }}
        >
          Update
        </button>

        {/* <a href="/adminhome/managesellers">
          <Button variant="dark">Back</Button>
        </a> */}
      </form>
    </div>
</div>
  );
}
