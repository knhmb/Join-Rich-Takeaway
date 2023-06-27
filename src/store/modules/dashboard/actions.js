import axios from "axios";

export default {
  async getBanners(context) {
    const response = await axios.get("/api/v1/platform/banners");
    context.commit("SET_BANNERS", response.data.items);
  },
  async getCmsContent(context) {
    const response = await axios.get("/api/v1/cms/contents");
    context.commit("SET_CMS_CONTENTS", response.data.items);
  },
  async getRestaurants(context) {
    const response = await axios.get("/api/v1/accounts/restaurants");
    context.commit("SET_RESTAURANTS", response.data.items);
  },
  async getProducts(context) {
    const response = await axios.get("/api/v1/platform/products");
    context.commit("SET_PRODUCTS", response.data.items);
  },
  async getRestaurantDetail(context, payload) {
    const response = await axios.get(`/api/v1/accounts/restaurants/${payload}`);
    context.commit("SET_RESTAURANT_DETAIL", response.data.item);
  },
  async getRestaurantProducts(context, payload) {
    const response = await axios.get("/api/v1/platform/products", {
      params: {
        filter: `restaurant:${payload}`,
      },
    });
    context.commit("SET_RESTAURANT_PRODUCTS", response.data.items);
  },
};
