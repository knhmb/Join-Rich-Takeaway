import axios from "axios";

export default {
    async cashPayment(_, payload) {
        const response = await axios.post('/api/v1/platform/checkout/cash', payload)
        window.location.href = response.data.redirect
    },
    async addToCart(context, payload) {
        const response = await axios.put('/api/v1/platform/cart/@me', payload)
        context.commit('CART_ITEMS', response.data)
    }
};
