import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function ViewUser(props) {
  const { email } = useParams();
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    axios
      .get(`${props.getURL}/${email}`)
      .then((res) => {
        setName(res.data[0].name);
        setNic(res.data[0].nic);
        setPhone(res.data[0].phone);
      })
      .catch((err) => {
        alert("Network Issue...");
      });
  });

  return (
    <>
      <a href={props.backBtnURL}>
        <Button variant="dark">Back</Button>
      </a>
      <div
        className="container"
        style={{ margin: "auto", maxWidth: "500px", padding: "20px" }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          {props.title}
        </h1>

        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            textAlign: "justify",
            borderRadius: "10px",
            height: "200px",
          }}
        >
          <center>
            <br></br>
            <table>
              <tr>
                <td style={{ width: "80px" }}>
                  <b>Name</b>
                </td>

                <td style={{ width: "20px" }}>:</td>

                <td style={{ width: "200px" }}>{name}</td>
              </tr>

              <tr></tr>

              <tr>
                <td>
                  {" "}
                  <b>Email</b>
                </td>
                <td>:</td>
                <td>{email}</td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <b>Phone</b>
                </td>
                <td>:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b>NIC</b>
                </td>
                <td>:</td>
                <td>{nic}</td>
              </tr>
              <tr></tr>
            </table>
          </center>
        </div>
      </div>
    </>
  );
}
