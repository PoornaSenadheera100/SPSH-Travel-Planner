import { auto } from "@popperjs/core";

export default function AdminServiceSearch() {
  let date = "06/27/2023";

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
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
      <div class="form-group row">
        <label for="date">Date</label>
        <input
          // type="date"
          type="text"
          id="date"
          name="date"
          class="form-control"
          value={date}
          // onChange={handleInputChange}
        />
        {/* <br /> */}
      </div>
      <div class="form-group row">
        <label for="time">Time</label>
        <input
          // type="time"
          type="text"
          id="time"
          name="time"
          class="form-control"
          value={"10:00"}
          // value={formData.time}
          // onChange={handleInputChange}
        />
        {/* <br /> */}
      </div>
      <div class="form-group row">
        <label for="time">Available</label>
        <input
          // type="time"
          type="text"
          id="time"
          name="time"
          class="form-control"
          value="08/10"
          disabled
          // value={formData.time}
          // onChange={handleInputChange}
        />
        {/* <br /> */}
      </div>
    </div>
  );
}
