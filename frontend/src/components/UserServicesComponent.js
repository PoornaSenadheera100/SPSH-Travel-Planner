import { useState } from "react";
import UserServiceBookingForm from "./UserServiceBookingForm";

export default function UserServicesComponent(props) {
  let { city, serviceName, serviceId, serviceProviderId } = props;

  let [serviceNames, setServiceName] = useState([serviceName]);

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
                </div>
              </a>
            </div>
          ))}
      </ul>
      <div id="myForm" style={{ display: "none" }}>
        <UserServiceBookingForm
          serviceNames={serviceNames}
          serviceId={serviceId}
          serviceProviderId={serviceProviderId}
          city={city}
          setShowServiceComponents={setShowServiceComponents}
        />
      </div>
    </div>
  );
}
