import axios from "axios";

export default {
  async saveAddress(context, payload) {
    const response = await axios.post("/api/v1/accounts/addresses", payload);
    context.commit("SAVE_ADDRESS", response.data.item);
  },

  async getAddresses(context) {
    const response = await axios.get("/api/v1/accounts/addresses");
    context.commit("SET_ADDRESSES", response.data.items);
  },
  async deleteAddress(_, payload) {
    await axios.delete(`/api/v1/accounts/addresses/${payload}`)
  },
  async editAddress(_, payload) {
    await axios.put(`/api/v1/accounts/addresses/${payload.id}`, payload.data)
  }
};
