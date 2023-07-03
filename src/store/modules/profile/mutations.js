export default {
  SAVE_ADDRESS(state, payload) {
    state.savedAddress = payload;
  },
  SET_ADDRESSES(state, payload) {
    state.addresses = payload;
  },
};
