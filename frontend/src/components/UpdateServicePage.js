import ElAdd from "./ElAdd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function UpdateServicePage() {
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

  const { update, id } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8070/service/getservice/${id}/${Service_ProviderId}`
      )
      // .get(
      //   `https://spsh-travel-planner-backend.onrender.com/service/get/${Service_ProviderId}/${id}`
      // )
      .then((res) => {
        console.log(res.data);
        setServiceId(res.data[0].ServiceId);
        setServiceName(res.data[0].ServiceName);
        setServiceLocation(res.data[0].ServiceLocation);
        setServicePrice(res.data[0].ServicePrice);
        setServiceDuration(res.data[0].ServiceDuration);
        setAvailableTime(res.data[0].AvailableTime);
        setAvailableDates(res.data[0].AvailableDates);
        setCapacity(res.data[0].Capacity);
        // setImage(res.data[0].Image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {ServiceId && (
        <ElAdd
          hidden="true"
          ServiceId={ServiceId}
          ServiceName={ServiceName}
          ServiceLocation={ServiceLocation}
          ServicePrice={ServicePrice}
          ServiceDuration={ServiceDuration}
          AvailableTime={AvailableTime}
          AvailableDates={AvailableDates}
          Capacity={Capacity}
          forUpdate="true"
        />
      )}
    </div>
  );
}
