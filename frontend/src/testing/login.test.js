import axios from "axios";

describe("Testing Tourist Login", () => {
  it("Valid Login", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/tourist/get/email/poornasenadheera100@gmail.com`
    );
    expect(res.data[0].password).toBe("poorna123");
  });
});

describe("Testing Tourist Login", () => {
  it("Invalid email Login", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/tourist/get/email/test@gmail.com`
    );
    expect(res.data[0]).toBe(undefined);
  });
});

describe("Testing Service Provider Login", () => {
  it("Valid Login", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/serviceprovider/get/email/suritharawwala@gmail.com`
    );
    expect(res.data[0].password).toBe("surith123");
  });
});

describe("Testing Service Provider Login", () => {
  it("Invalid email Login", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/serviceprovider/get/email/test@gmail.com`
    );
    expect(res.data[0]).toBe(undefined);
  });
});

describe("Testing Admin Login", () => {
  it("Valid Login", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/admin/get/email/admin@spsh.lk`
    );
    expect(res.data[0].password).toBe("spshadmin");
  });
});

describe("Testing Admin Login", () => {
  it("Invalid email Login", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/admin/get/email/admin.lk`
    );
    expect(res.data[0]).toBe(undefined);
  });
});
