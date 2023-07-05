import axios from "axios";

export default {
  async getOTP(_, payload) {
    await axios.post("/api/v1/accounts/otp", payload);
  },
  async signUp(_, payload) {
    await axios.post("/api/v1/accounts", payload);
  },
  async login(context, payload) {
    const response = await axios.post('/api/v1/authenticate', payload)
    context.commit('LOGIN', response.data)
  },
  async logout(context) {
    await axios.delete('/api/v1/authenticate')
    context.commit('LOGOUT')
  },
  async checkUser(context, payload) {
    const response = await axios.get('/api/v1/authenticate', {
      headers: {
        Authorization: `Bearer ${payload}`
      }
    })
    context.commit('LOGIN', response.data)
  },
  async updateUser(context, payload) {
    const response = await axios.put(`/api/v1/accounts/${payload.id}`, payload.data)
    context.commit('UPDATE_USER', response.data.item)
  },
  async getBookmarks(context) {
    const response = await axios.get('/api/v1/accounts/favourites/@me')
    context.commit('SET_BOOKMARKS', response.data)
  },
  async bookmark(context, payload) {
    const response = await axios.post(`/api/v1/accounts/favourites/@me/restaurant/${payload}`)
    context.commit('SET_BOOKMARKS', response.data)
  },
  async removeBookmark(context, payload) {
    const response = await axios.delete(`/api/v1/accounts/favourites/@me/restaurant/${payload}`)
    context.commit('SET_BOOKMARKS', response.data)
  }
};
