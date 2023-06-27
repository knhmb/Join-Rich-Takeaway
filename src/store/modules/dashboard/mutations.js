export default {
  SET_BANNERS(state, payload) {
    state.banners = payload;
  },
  SET_CMS_CONTENTS(state, payload) {
    state.cmsContents = payload;
  },
  SET_RESTAURANTS(state, payload) {
    state.restaurants = payload;
  },
  SET_PRODUCTS(state, payload) {
    state.products = payload;
  },
  SET_RESTAURANT_DETAIL(state, payload) {
    state.restaurantDetail = payload;
  },
  SET_RESTAURANT_PRODUCTS(state, payload) {
    state.restaurantProducts = payload;
  },
  SELECTED_PRODUCTS(state, payload) {
    state.selectedProducts.push(payload);
  },
  RESET_SELECTED_PRODUCTS(state) {
    state.selectedProducts = [];
  },
};
