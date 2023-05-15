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

  const { id } = useParams();

  useEffect(() => {
    axios
      // .get(`http://localhost:8070/service/get/${Service_ProviderId}/${id}`)
      .get(
        `https://spsh-travel-planner-backend.onrender.com/service/get/${Service_ProviderId}/${id}`
      )
      .then((res) => {
        console.log(res.data.service);
        setServiceId(res.data.service[0].ServiceId);
        setServiceName(res.data.service[0].ServiceName);
        setServiceLocation(res.data.service[0].ServiceLocation);
        setServicePrice(res.data.service[0].ServicePrice);
        setServiceDuration(res.data.service[0].ServiceDuration);
        setAvailableTime(res.data.service[0].AvailableTime);
        setAvailableDates(res.data.service[0].AvailableDates);
        setCapacity(res.data.service[0].Capacity);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Service_ProviderId, id]);
  return (
    <div>
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
      />
    </div>
  );
}
