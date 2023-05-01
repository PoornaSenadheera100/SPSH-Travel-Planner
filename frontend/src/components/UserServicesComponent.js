import { useState } from "react";
import UserServiceBookingForm from "./UserServiceBookingForm";

export default function UserServicesComponent(props) {
  let { city } = props;

  let [serviceNames, setServiceName] = useState([
    "Pony ride",
    "Horseback riding",
  ]);
  let [serviceDescriptions, setServiceDescription] = useState([
    "Pony ride in racecourse",
    "Horseback riding on the beach",
  ]);

  let [showServiceComponents, setShowServiceComponents] = useState(true);

  const handleServiceClick = (index) => {
    setShowServiceComponents(false);
    document.getElementById("myForm").style.display = "block";
  };

  return (
    <div>
      <ul>
        {showServiceComponents &&
          serviceNames.map((name, index) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="#"
                style={{ textDecoration: "none" }}
                onClick={() => handleServiceClick(index)}
              >
                <div
                  key={index}
                  style={{
                    border: "1px solid black",
                    margin: "10px",
                    backgroundColor: "#000080",
                    borderRadius: "5px",
                    padding: "20px",
                    minWidth: "275px",
                  }}
                >
                  <h3 style={{ margin: "0", color: "#fff", fontSize: "24px" }}>
                    {name}
                  </h3>
                  <p style={{ color: "#fff" }}>{serviceDescriptions[index]}</p>
                </div>
              </a>
            </div>
          ))}
      </ul>
      <div id="myForm" style={{ display: "none" }}>
        <UserServiceBookingForm serviceName={serviceNames} />
      </div>
    </div>
  );
}
