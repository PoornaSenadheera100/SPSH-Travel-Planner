import { useState } from "react";

export default function UserViewService(props) {
  if (sessionStorage.getItem("sTravPlaTsirout") === null) {
    window.location.replace("/");
  }

  // let status = props.status;
  let status = "Pending";
  let price = 500;
  let date = "06/27/2023";

  let [quantity, setQuantity] = useState(2);
  let total = price * quantity;

  return (
    <div style={{ width: 500, margin: "auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Gregory Lake Boat Ride</h2>
      </div>
      <form>
        <div class="form-group row">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            // value={formData.name}
            value={"John Cena"}
            disabled
            // onChange={handleInputChange}
          />
        </div>
        {/* <br /> */}
        <div class="form-group row">
          <label for="contactNo">Contact No</label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            class="form-control"
            // value={formData.name}
            value={"0771234567"}
            disabled
            // onChange={handleInputChange}
          />
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
            disabled
            // onChange={handleInputChange}
          />
          {/* <br /> */}
        </div>
        <div class="form-group row">
          <label for="time">Time:</label>
          <input
            // type="time"
            type="text"
            id="time"
            name="time"
            class="form-control"
            value={"10:00"}
            disabled
            // value={formData.time}
            // onChange={handleInputChange}
          />
          {/* <br /> */}
        </div>
        <div class="form-group row">
          <label for="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            class="form-control"
            min="0"
            placeholder="Enter Quantity"
            value={quantity}
            disabled
            // onChange={(e) => {
            //   setQuantity(e.target.value);
            // }}
          />
          {/* <br /> */}
        </div>

        <div class="form-group row">
          <label for="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            class="form-control"
            value={`Rs. ${total}`}
            disabled
            // onChange={handleInputChange}
          />
        </div>

        <div class="form-group row">
          <label for="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            class="form-control"
            value={status}
            disabled
            // onChange={handleInputChange}
          />
        </div>

        {/* <input type="submit" value="Submit" /> */}

        <div style={{ marginBottom: "75px" }}>
          <button class="btn btn-dark" style={{ float: "left" }}>
            Back
          </button>

          <button
            class="btn btn-danger"
            style={{ float: "right" }}
            onClick={() => {
              if (window.confirm("Are you sure you want to cancel?")) {
                alert("Cancelled");
              }
            }}
          >
            Cancel
          </button>
          <br />
          <br />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}
