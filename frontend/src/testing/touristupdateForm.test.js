import axios from "axios";

describe("Testing whether the tourist name is fetched correctly when email is given", () => {
  it("Correct name", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/tourist/get/email/subasinghesanuthi@gmail.com`
    );
    expect(res.data[0].name).toBe("Sanuthi");
  });
});

describe("Testing whether the tourist nic is fetched correctly when email is given", () => {
  it("Correct name", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/tourist/get/email/subasinghesanuthi@gmail.com`
    );
    expect(res.data[0].nic).toBe("200172586987");
  });
});


