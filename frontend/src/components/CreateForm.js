import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CreateForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const { paramemail } = useParams();

  useEffect(() => {
    disableEmail(props.disableEmail);
    if (props.getURL) {
      console.log(paramemail);
      axios.get(`${props.getURL}/${paramemail}`).then((res) => {
        console.log(res.data[0]);
        setName(res.data[0].name);
        setEmail(res.data[0].email);
        setPhone(res.data[0].phone);
        setNic(res.data[0].nic);
      });
    }
  }, [props.getURL, paramemail]);

  function proceed(e) {
    e.preventDefault();
    createTourist();
    createSP();
    updateSP();
    updateTourist();
    TouristUpdateProfile();
  }

  function createTourist() {
    if (props.title === "Create New Account") {
      if (password !== rePassword) {
        alert(
          "Re-entered password does not match with the password that you have entered!"
        );
      } else {
        axios
          // .get(`http://localhost:8070/tourist/get/email/${email}`)
          .get(
            `https://spsh-travel-planner-backend.onrender.com/tourist/get/email/${email}`
          )
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
                // .post("http://localhost:8070/tourist/add", newTourist)
                .post(
                  "https://spsh-travel-planner-backend.onrender.com/tourist/add",
                  newTourist
                )
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

  function createSP() {
    if (props.title === "Add Service Provider") {
      if (password !== rePassword) {
        alert(
          "Re-entered password does not match with the password that you have entered!"
        );
      } else {
        axios
          // .get(`http://localhost:8070/serviceprovider/get/email/${email}`)
          .get(
            `https://spsh-travel-planner-backend.onrender.com/serviceprovider/get/email/${email}`
          )
          .then((res) => {
            if (res.data[0] === undefined) {
              const newSP = {
                name,
                nic,
                email,
                phone,
                password,
              };

              axios
                // .post("http://localhost:8070/serviceprovider/add", newSP)
                .post(
                  "https://spsh-travel-planner-backend.onrender.com/serviceprovider/add",
                  newSP
                )
                .then(() => {
                  alert("Registration Successfull !");
                  window.location.replace("/admin/addserviceprovider");
                })
                .catch((err) => {
                  alert("Something went wrong !");
                });
            } else {
              alert("This service provider already has an account !");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  function updateSP() {
    if (props.title === "Update Service Provider") {
      if (password !== rePassword) {
        alert(
          "Re-entered password does not match with the password that you have entered!"
        );
      } else if (password === "" && rePassword === "") {
        const newSP = {
          name,
          nic,
          email,
          phone,
        };

        axios
          // .put(
          //   `http://localhost:8070/serviceprovider/update/${paramemail}`,
          //   newSP
          // )
          .put(
            `https://spsh-travel-planner-backend.onrender.com/serviceprovider/update/${paramemail}`,
            newSP
          )
          .then(() => {
            alert("Service Provider Updated");
            window.location.replace("/admin/manageserviceproviders");
          })
          .catch((err) => {
            alert("Network Error...");
          });
      } else {
        const newSP = {
          name,
          nic,
          email,
          phone,
          password,
        };

        axios
          // .put(
          //   `http://localhost:8070/serviceprovider/update/${paramemail}`,
          //   newSP
          // )
          .put(
            `https://spsh-travel-planner-backend.onrender.com/serviceprovider/update/${paramemail}`,
            newSP
          )
          .then(() => {
            alert("Service Provider Updated");
            window.location.replace("/admin/manageserviceproviders");
          })
          .catch((err) => {
            alert("Network Error...");
          });
      }
    }
  }

  function updateTourist() {
    if (props.title === "Update Tourist") {
      if (password !== rePassword) {
        alert(
          "Re-entered password does not match with the password that you have entered!"
        );
      } else if (password === "" && rePassword === "") {
        const newTourist = {
          name,
          nic,
          email,
          phone,
        };

        axios
          // .put(`http://localhost:8070/tourist/update/${paramemail}`, newTourist)
          .put(
            `https://spsh-travel-planner-backend.onrender.com/tourist/update/${paramemail}`,
            newTourist
          )
          .then(() => {
            alert("Tourist Updated");
            window.location.replace("/admin/managetourists");
          })
          .catch((err) => {
            alert("Network Error...");
          });
      } else {
        const newTourist = {
          name,
          nic,
          email,
          phone,
          password,
        };

        axios
          // .put(`http://localhost:8070/tourist/update/${paramemail}`, newTourist)
          .put(
            `https://spsh-travel-planner-backend.onrender.com/tourist/update/${paramemail}`,
            newTourist
          )
          .then(() => {
            alert("Tourist Updated");
            window.location.replace("/admin/managetourists");
          })
          .catch((err) => {
            alert("Network Error...");
          });
      }
    }
  }

  function TouristUpdateProfile() {
    if (props.title == "Update tourist profile") {
      //Check of the Email is updated or not
      // if (paramemail != email) {
      //   alert("Sorry you cannot edit the Email!");
      // } else {
      //check if both passwords are matching and then update
      if (password != rePassword) {
        alert("Sorry passwords are not matching!");
      } else if (password === "" && rePassword === "") {
        const updateTouristWithoutPassword = {
          name,
          nic,
          phone,
          email,
        };
        axios
          .put(
            `http://localhost:8070/tourist/update/${paramemail}`,
            updateTouristWithoutPassword
          )
          .then(() => {
            alert("Profile updated");
            window.location.replace("http://localhost:3000/tourist/");
          })
          .catch((err) => {
            alert("Sorry unable to update tourist");
          });
      } else {
        const newTourist = {
          name,
          nic,
          phone,
          email,
          password,
        };
        axios
          .put(`http://localhost:8070/tourist/update/${paramemail}`, newTourist)
          .then(() => {
            alert("Profile updated");
            window.location.replace("http://localhost:3000/tourist/");
          })
          .catch((err) => {
            alert("Update failure occured ! ");
          });
      }
    }
  }

  function disableEmail(isDisabled) {
    if (isDisabled) {
      document.getElementById("email").disabled = true;
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
          value={email}
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
