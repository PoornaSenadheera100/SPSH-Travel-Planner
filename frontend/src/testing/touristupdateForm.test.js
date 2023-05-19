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


describe("Testing whether the phone number is updated correctly", () => {
  it("Correct phone number format", async () => {
    // Make the update request to update the phone number
    await axios.put(
      `https://spsh-travel-planner-backend.onrender.com/tourist/update/subasinghesanuthi@gmail.com`,
      { phoneNumber: "0714296476" } // Replace with the updated phone number
    );

    // Retrieve the updated data
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/tourist/get/email/subasinghesanuthi@gmail.com`
    );

    // Assert that the updated phone number has the correct format
    const updatedPhoneNumber = res.data[0].phone;
    expect(updatedPhoneNumber.length).toBe(10); // Check the length
    expect(/^\d+$/.test(updatedPhoneNumber)).toBe(true); // Check if it only contains digits
  });
});
