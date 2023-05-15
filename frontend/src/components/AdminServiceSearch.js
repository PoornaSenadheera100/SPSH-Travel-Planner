import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminServiceSearch(props) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  function searchServiceAvailability(e) {
    e.preventDefault();

    axios
      // .get(
      //   `http://localhost:8070/servicerequest/get/bookingId/${props.bookingId}`
      // )
      .get(
        `https://spsh-travel-planner-backend.onrender.com/servicerequest/get/bookingId/${props.bookingId}`
      )
      .then((res) => {
        console.log(res.data);
        setDate(res.data[0].date);
        setTime(res.data[0].time);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div style={{ width: 300 }}>
      <div style={{ textAlign: "center" }}>
        <h2>Search Service Availability</h2>
      </div>
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={props.bookingId}
            disabled
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={searchServiceAvailability}
          >
            Search
          </button>
        </form>
      </div>
      <div class="form-group row">
        <label for="date">Date</label>
        <input
          type="text"
          id="date"
          name="date"
          class="form-control"
          value={date}
          disabled
        />
      </div>
      <div class="form-group row">
        <label for="time">Time</label>
        <input
          type="text"
          id="time"
          name="time"
          class="form-control"
          value={time}
          disabled
        />
      </div>
    </div>
  );
}
