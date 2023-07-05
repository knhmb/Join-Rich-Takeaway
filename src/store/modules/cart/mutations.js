export default {
  SET_PAYMENT_METHOD(state, payload) {
    state.paymentMethod = payload;
  },
  CART_ITEMS(state, payload) {
    state.cartItems = payload
  },
  SET_ORDER_DETAILS(state, payload) {
    state.orderDetails = payload
  },
  SET_ORDERS(state, payload) {
    state.orders = payload
  }
};
