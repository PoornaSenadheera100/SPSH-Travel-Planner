import axios from "axios";

//get all booking details of all tourists
describe("Testing fetching all bookings made by tourists", () => {
  it("Tourist information should be fetched", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/servicerequest/`
    );
    expect(res.status).toBe(200);
    expect(res.data[0].bookingId).toBe("1942023221156");
    expect(res.data[0].serviceName).toBe("Breezy Hills");
    expect(res.data[0].name).toBe("Sathira Wijeratne");
    expect(res.data[0].contactNo).toBe("0711234567");
    expect(res.data[0].email).toBe("swije27@gmail.com");
    expect(res.data[0].serviceProviderId).toBe("suritharawwala@gmail.com");
    expect(res.data[0].date).toBe("10th May 2023");
    expect(res.data[0].time).toBe("8.00 am to 4.00pm");
    expect(res.data[0].quantity).toBe(1);
    expect(res.data[0].price).toBe(6499);
    expect(res.data[0].status).toBe("Pending");
  });
});

//update booking status
describe("Testing updating the status of bookings", () => {
  it("Tourist booking status must be updated", async () => {
    const status = "Pending";

    const updateStatus = {
      status,
    };

    const res = await axios.put(
      `https://spsh-travel-planner-backend.onrender.com/servicerequest/update/bookingId/194202322136`,
      updateStatus
    );
    expect(res.status).toBe(200);
  });
});
