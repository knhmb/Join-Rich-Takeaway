export default {
  SET_PAYMENT_METHOD(state, payload) {
    state.paymentMethod = payload;
  },
  CART_ITEMS(state, payload) {
    state.cartItems = payload
  }
};
