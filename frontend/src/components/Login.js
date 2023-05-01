import { useState } from "react";
import axios from "axios";

export default function Login(props) {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  function validate(e) {
    e.preventDefault();
    if (props.title.props.children === "SPSH Travel Planner") {
      validateTraveller();
    } else {
      if (email === "admin@spsh.lk") {
        validateAdmin();
      } else {
        validateSP();
      }
    }
  }

  function validateTraveller() {}

  function validateSP() {}

  function validateAdmin() {
    axios
      .get(`http://localhost:8070/admin/get/email/${email}`)
      .then((res) => {
        console.log(res.data);
        if (res.data[0].password === password) {
          sessionStorage.setItem("sTravPlaNimda", Math.random().toString());
          window.location.replace(
            `http://localhost:3000/admin/addserviceprovider`
          );
        } else {
          alert("Invalid Credentials!");
        }
      })
      .catch((err) => {
        alert("Invalid Credentials!");
      });
  }

  return (
    <form style={{ width: props.formWidth }} onSubmit={validate}>
      <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
        <div className="card-body p-5 text-center">
          <div className="mb-md-5 mt-md-4 pb-5">
            {props.title}
            {props.subtitle}
            <div className="form-outline form-white mb-4">
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                placeholder="abc@gmail.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="typeEmailX">
                Email
              </label>
            </div>
            <div className="form-outline form-white mb-4">
              <input
                type="password"
                id="password"
                className="form-control form-control-lg"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="typePasswordX">
                Password
              </label>
            </div>
            <button className="btn btn-outline-light btn-lg px-5" type="submit">
              Login
            </button>{" "}
            {props.signupBtn}
          </div>
        </div>
      </div>
    </form>
  );
}
