import axios from "axios";

describe("Viewing Details of a specific service", () => {
  it("Fetched Specifc Service Details", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/service/getservice/S005/suritharawwala@gmail.com`
    );
    expect(res.data[0].ServiceName).toBe("Nine Arches Bridge");
    expect(res.data[0].ServiceLocation).toBe("Badulla");
    expect(res.data[0].ServicePrice).toBe(9800);
    expect(res.data[0].ServiceDuration).toBe("4 hours");
    expect(res.data[0].AvailableTime).toBe("10.00 a.m - 3.00 p.m");
    expect(res.data[0].AvailableDates).toBe("26th of May 2023");
    expect(res.data[0].Capacity).toBe(52);
  });
});

describe("Identify unavailable service details", () => {
  it("Undefined Details", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/service/getservice/S876/suritharawwala@gmail.com`
    );
    expect(res.data[0]).toBe(undefined);
  });
});

describe("Identify specific provider's first requests", () => {
  it("Requests to handle", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/servicerequest/myrequest/suritharawwala@gmail.com`
    );
    expect(res.data[0].bookingId).toBe("1542023203144");
    expect(res.data[0].serviceName).toBe("Breezy Hills");
    expect(res.data[0].name).toBe("Poorna Senadheera");
    expect(res.data[0].contactNo).toBe("0714204648");
    expect(res.data[0].email).toBe("poornasenadheera100@gmail.com");
    expect(res.data[0].serviceProviderId).toBe("suritharawwala@gmail.com");
    expect(res.data[0].date).toBe("10th May 2023");
    expect(res.data[0].time).toBe("8.00 am to 4.00pm");
    expect(res.data[0].quantity).toBe(1);
    expect(res.data[0].price).toBe(6499);
    expect(res.data[0].status).toBe("Approved");
  });
});

describe("Identify unavailable specific provider's first requests", () => {
  it("Unavailable Requests to handle", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/servicerequest/myrequest/kuritharawwala@gmail.com`
    );
    expect(res.data[0]).toBe(undefined);
  });
});
