import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Buffer } from "buffer";

export default function SingleService() {
  if (sessionStorage.getItem("sTravPlaVresVorp") === null) {
    window.location.replace("/");
  }

  const Service_ProviderId = sessionStorage.getItem("serviceProviderEmail");

  const [ServiceId, setServiceId] = useState("");
  const [ServiceName, setServiceName] = useState("");
  const [ServiceLocation, setServiceLocation] = useState("");
  const [ServicePrice, setServicePrice] = useState();
  const [ServiceDuration, setServiceDuration] = useState();
  const [AvailableTime, setAvailableTime] = useState("");
  const [AvailableDates, setAvailableDates] = useState("");
  const [Capacity, setCapacity] = useState();
  const [Image, setImage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8070/service/getservice/${id}/${Service_ProviderId}`
      )
      // .get(
      //   `https://spsh-travel-planner-backend.onrender.com/service/getservice/${id}/${Service_ProviderId}`
      // )
      .then((res) => {
        console.log(res.data);
        console.log(Service_ProviderId);
        //console.log(productId);
        setServiceId(res.data[0].ServiceId);
        setServiceName(res.data[0].ServiceName);
        setServiceLocation(res.data[0].ServiceLocation);
        setServicePrice(res.data[0].ServicePrice);
        setServiceDuration(res.data[0].ServiceDuration);
        setAvailableTime(res.data[0].AvailableTime);
        setAvailableDates(res.data[0].AvailableDates);
        setCapacity(res.data[0].Capacity);
        setImage(res.data[0].Image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Get the image source.
  const getImageSource = (imageData) => {
    let imageSource = `data:image/png;base64,${Buffer.from(imageData.data)
      .toString("base64")
      .substring(19)}`;
    imageSource = imageSource.slice(0, imageSource.length - 2);
    return imageSource;
  };

  if (Image !== "") {
    return (
      <div className="container">
        <div>
          <a type="button" href="/serviceprovider" class="btn btn-secondary">
            Back
          </a>
        </div>
        <table className="table table-borderless">
          <tr>
            <th scope="col">Service ID</th>
            <th scope="col">Service Name</th>
            <th scope="col">Service location</th>
            <th scope="col">Service Price</th>
            <th scope="col">Duration</th>
            <th scope="col">Available Time</th>
            <th scope="col">Available Date</th>
            <th scope="col">Capacity</th>
            <th scope="col">Image</th>
          </tr>
          <tr scope="row">
            <td class="text-uppercase">{ServiceId}</td>
            <td class="text-uppercase">{ServiceName}</td>
            <td class="text-uppercase">{ServiceLocation}</td>
            <td class="text-uppercase">{ServicePrice}</td>
            <td class="text-uppercase">{ServiceDuration}</td>
            <td class="text-uppercase">{AvailableTime}</td>
            <td class="text-uppercase">{AvailableDates}</td>
            <td class="text-uppercase">{Capacity}</td>

            <td>
              <img
                src={getImageSource(Image)}
                alt={ServiceName}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transition: "transform 0.2s ease-in-out",
                  transform: isHovered ? "scale(1.14)" : "scale(1)",
                }}
                width="200px"
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
