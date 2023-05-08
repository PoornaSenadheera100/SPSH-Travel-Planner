import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CreateForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState({});
  const [rePassword, setRePassword] = useState({});

  // email = useParams();

  useEffect(() => {
    if (props.getURL) {
      axios.get(`${props.getURL}/${email.email}`).then((res) => {
        console.log(res.data[0]);
        setName(res.data[0].name);
        setEmail(res.data[0].email);
        setPhone(res.data[0].phone);
        setNic(res.data[0].nic);
      });
    }
  });

  function proceed(e) {
    e.preventDefault();
    createTourist();
  }

  function createTourist() {
    if (props.title === "Create New Account") {
      if (password !== rePassword) {
        alert(
          "Re-entered password does not match with the password that you have entered!"
        );
      } else {
        axios
          .get(`http://localhost:8070/tourist/get/email/${email}`)
          .then((res) => {
            if (res.data[0] === undefined) {
              const newTourist = {
                name,
                nic,
                email,
                phone,
                password,
              };

              axios
                .post("http://localhost:8070/tourist/add", newTourist)
                .then(() => {
                  alert("Registration Successfull !");
                  window.location.replace("/");
                })
                .catch((err) => {
                  alert("Something went wrong !");
                });
            } else {
              alert("You already have an account !");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  return (
    <div>
      <a href={props.backBtnURL}>
        <Button variant="dark">Back</Button>
      </a>
      <center>
        <h1>{props.title}</h1>
      </center>

      <form onSubmit={proceed}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          class="form-control"
          placeholder="Enter your name"
          pattern="[A-Za-z .]{1,100}"
          value={name}
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
          placeholder="abc@gmail.com"
          value={email.email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <br></br>

        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          id="phone"
          class="form-control"
          placeholder="Phone No"
          pattern="0[0-9]{9}"
          value={phone}
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
          placeholder="NIC"
          value={nic}
          required
          onChange={(e) => {
            setNic(e.target.value);
          }}
        />

        {props.pwdChangeWarning}

        <br></br>

        <label htmlFor="newpassword">New Password</label>
        <input
          type="password"
          id="newpassword"
          class="form-control"
          placeholder="Password"
          minLength="8"
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
          Submit
        </button>

        {/* <a href="/adminhome/managesellers">
          <Button variant="dark">Back</Button>
        </a> */}
      </form>
    </div>
  );
}
