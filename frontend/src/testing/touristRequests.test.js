import axios from "axios";

//fetch requests
describe("Testing fetching bookings made by tourist", () => {
  it("Should get a valid status", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/servicerequest/get/email/swije27@gmail.com`
    );
    expect(res.status).toBe(200);
  });
});

//fetch user details
describe("Testing fetching tourist information", () => {
  it("Tourist information should be fetched", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/tourist/get/email/swije27@gmail.com`
    );
    expect(res.status).toBe(200);
    expect(res.data[0].name).toBe("Sathira Wijeratne");
    expect(res.data[0].nic).toBe("200112345678");
    expect(res.data[0].email).toBe("swije27@gmail.com");
    expect(res.data[0].phone).toBe("0711234567");
    expect(res.data[0].password).toBe("sathira123");
  });
});

//get service details
describe("Testing fetching tourist information", () => {
  it("Tourist information should be fetched", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/service/getservice/S001/suritharawwala@gmail.com`
    );
    expect(res.status).toBe(200);
    expect(res.data[0].Service_ProviderId).toBe("suritharawwala@gmail.com");
    expect(res.data[0].ServiceId).toBe("S001");
    expect(res.data[0].ServiceName).toBe("Breezy Hills");
    expect(res.data[0].ServiceLocation).toBe("Nuwara-Eliya");
    expect(res.data[0].ServicePrice).toBe(6499);
    expect(res.data[0].ServiceDuration).toBe("45 minutes");
    expect(res.data[0].AvailableTime).toBe("8.00 am to 4.00pm");
    expect(res.data[0].AvailableDates).toBe("10th May 2023");
    expect(res.data[0].Capacity).toBe(70);
  });
});
