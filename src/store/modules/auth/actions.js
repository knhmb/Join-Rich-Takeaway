import axios from "axios";

export default {
  async getOTP(_, payload) {
    await axios.post("/api/v1/accounts/otp", payload);
  },
  async signUp(_, payload) {
    await axios.post("/api/v1/accounts", payload);
  },
};
