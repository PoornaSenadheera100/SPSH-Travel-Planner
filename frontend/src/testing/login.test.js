import validate from "../components/methods/login";
import axios from "axios";

describe("Testing Tourist Login", () => {
  it("Testing Tourist Login", async () => {
    const res = await axios.get(
      `https://spsh-travel-planner-backend.onrender.com/tourist/get/email/poornasenadheera100@gmail.com`
    );
    expect(res.data[0].password).toBe("poorna123");
  });
});
