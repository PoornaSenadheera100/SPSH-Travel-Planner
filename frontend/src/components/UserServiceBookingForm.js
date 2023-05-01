export default function UserServiceBookingForm(props) {
  return (
    <div>
      <form>
        <div class="form-group row">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            // value={formData.name}
            value={"John"}
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
            // value={formData.quantity}
            // onChange={handleInputChange}
          />
          {/* <br /> */}
        </div>

        <div class="form-group row">
          <label for="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            class="form-control"
            // value={formData.price}
            // onChange={handleInputChange}
          />
          {/* <br /> */}
        </div>

        {/* <input type="submit" value="Submit" /> */}

        <div class="form-group row">
          <button style={{ float: "left" }}>Back</button>
          <button style={{ float: "right" }}>Submit</button>
        </div>
      </form>
    </div>
  );
}
