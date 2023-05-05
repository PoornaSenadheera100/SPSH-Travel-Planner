import { useState } from "react";

export default function UserServiceBookingForm(props) {
  let price = 500;
  let [quantity, setQuantity] = useState(1);
  let total = price * quantity;

  return (
    <div style={{ width: 500, margin: "auto" }}>
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
            // onChange={handleInputChange}
          />
        </div>
        <div class="form-group row">
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            class="form-control"
            // value={formData.date}
            // onChange={handleInputChange}
          />
          {/* <br /> */}
        </div>
        <div class="form-group row">
          <label for="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            class="form-control"
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
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
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

        {/* <input type="submit" value="Submit" /> */}

        <div style={{ marginBottom: "75px" }}>
          <button class="btn btn-dark" style={{ float: "left" }}>
            Back
          </button>
          <button class="btn btn-success" style={{ float: "right" }}>
            Book
          </button>
        </div>
      </form>
    </div>
  );
}
