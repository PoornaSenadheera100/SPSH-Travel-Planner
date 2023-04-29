import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function CreateForm(props) {
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [phone, setPhone] = useState({});
  const [delChrg, setDelChrg] = useState();
  const [password, setPassword] = useState({});
  const [rePassword, setRePassword] = useState({});

  function proceed() {}

  return (
    <div>
      <a href="/adminhome/managesellers">
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
          required
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />

        <br></br>

        <label htmlFor="delChrg">Delivery Charge (Rs.)</label>
        <input
          type="number"
          id="delChrg"
          class="form-control"
          placeholder="Delivery Charge"
          min="0"
          step="0.01"
          required
          onChange={(e) => {
            setDelChrg(e.target.value);
          }}
        />

        <br></br>

        <label htmlFor="newpassword">New Password</label>
        <input
          type="password"
          id="newpassword"
          class="form-control"
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
          Submit
        </button>
      </form>
    </div>
  );
}
