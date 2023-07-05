export default {
  SAVE_ADDRESS(state, payload) {
    state.savedAddress = payload;
  },
  SET_ADDRESSES(state, payload) {
    state.addresses = payload;
  },
  STORE_ADDRESS_ID(state, payload) {
    state.addressID = payload
  }
};
