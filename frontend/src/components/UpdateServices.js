import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Buffer } from "buffer";

function UpdateService() {
  /*
    if(sessionStorage.getItem("sAyurCenRelles") === null){
        window.location.replace("/sellerlogin");
    }
    */

  //const SupplierId = sessionStorage.getItem("sellerEmail");

  const [Service_ProviderId, setService_ProviderId] = useState(
    "suritharawwala@gmail.com"
  );
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
        setAvailableTime(res.data.service[0].setAvailableTime);
        setAvailableDates(res.data.service[0].setAvailableDates);
        setCapacity(res.data.service[0].setCapacity);
        setImage(res.data.service[0].Image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleProductImageChange(event) {
    const imageFile = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      setImage(reader.result);
      console.log(reader.result); //converts to base64.
    };
    reader.onerror = (error) => {
      console.log("Error : ", error);
    };
  }

  function updateData(e) {
    e.preventDefault();

    const newService = {
      Service_ProviderId,
      ServiceId,
      ServiceName,
      ServiceLocation,
      ServicePrice,
      ServiceDuration,
      AvailableTime,
      AvailableDates,
      Capacity,
      Image,
    };
    axios
      // .put(
      //   `http://localhost:8070/service/update/${Service_ProviderId}/${id}`,
      //   newService
      // )
      .put(
        `https://spsh-travel-planner-backend.onrender.com/service/update/${Service_ProviderId}/${id}`,
        newService
      )
      .then(() => {
        alert("Service  Updated");
        //window.location --> helps the user to navigate(frontend --> so port is 3000)
        //axios --> navigation between frontend and backend --> so port is 8070.
        window.location.replace("/service/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  const getImageSource = (imageData) => {
    let imageSource = `data:image/png;base64,${Buffer.from(imageData.data)
      .toString("base64")
      .substring(19)}`;
    imageSource = imageSource.slice(0, imageSource.length - 2);
    return imageSource;
  };

  if (Image !== "") {
    return (
      <div>
        <h1 style={{ marginLeft: "50px" }}>Update Service</h1>
        <form onSubmit={updateData} style={{ marginLeft: "50px" }}>
          <div className="form-group">
            <div
              style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}
            >
              <label for="name">Service ID</label>
            </div>

            <div class="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="code"
                pattern="[S][0-9]{3}"
                value={ServiceId}
                placeholder="Enter Service ID"
                onChange={(e) => {
                  setServiceId(e.target.value);
                }}
                disabled
              />
            </div>
          </div>
          <div className="form-group">
            <div
              style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}
            >
              <label for="name">Service Name</label>
            </div>

            {/* using the value --> we can display the values that was previously entered by the user.*/}
            <div class="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                value={ServiceName}
                pattern="[a-zA-Z\s]+"
                placeholder="Enter Service Name"
                onChange={(e) => {
                  console.log("Hi");
                  setServiceName(e.target.value);
                  //console.log(e.target.v)
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <div
              style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}
            >
              <label for="description">Service Location</label>
            </div>

            <div class="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="location"
                maxlength="10"
                pattern="[a-zA-Z\s]+"
                value={ServiceLocation}
                placeholder="Enter Service Location"
                onChange={(e) => {
                  setServiceLocation(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <div
              style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}
            >
              <label for="price">Service Price</label>
            </div>

            <div class="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="ServicePrices"
                min="0"
                value={ServicePrice}
                placeholder="Enter Price"
                onChange={(e) => {
                  setServicePrice(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <div
              style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}
            >
              <label for="quantity">Duration</label>
            </div>

            <div class="col-sm-10">
              <input
                type="text"
                className="form-control"
                min="0"
                id="ServiceDuration"
                value={ServiceDuration}
                placeholder="Enter Duration"
                onChange={(e) => {
                  setServiceDuration(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <div
              style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}
            >
              <label for="quantity">Available Time</label>
            </div>

            <div class="col-sm-10">
              <input
                type="text"
                className="form-control"
                min="0"
                id="AvailableTime"
                value={AvailableTime}
                placeholder="Enter Available Time"
                onChange={(e) => {
                  setAvailableTime(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <div
              style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}
            >
              <label for="quantity">Available Dates</label>
            </div>

            <div class="col-sm-10">
              <input
                type="text"
                className="form-control"
                min="0"
                id="AvailableDates"
                value={AvailableDates}
                placeholder="Enter Available Date"
                onChange={(e) => {
                  setAvailableDates(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <div
              style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}
            >
              <label for="quantity">Capacity</label>
            </div>

            <div class="col-sm-10">
              <input
                type="text"
                className="form-control"
                min="0"
                id="Capacity"
                value={Capacity}
                placeholder="Enter Capacity"
                onChange={(e) => {
                  setCapacity(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <div class="col-sm-10">
              {/*<input type="file" className="form-control" id="image" src={getImageSource(Image)} placeholder="Upload Image" onChange={(e) => {
                       handleProductImageChange(e);*/}
              <p
                src={getImageSource(Image)}
                onChange={(e) => {
                  handleProductImageChange(e);
                  // setImage(e.target.value);
                  /*const file = e.target.files[0];
                         const reader = new FileReader();

                            reader.onload = (event) => { 
                            setImage(event);
                            };

                             reader.readAsDataURL(file);*/
                }}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Update
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a type="button" href="/service" class="btn btn-secondary">
            Back
          </a>
        </form>
      </div>
    );
  }
}

export default UpdateService;
