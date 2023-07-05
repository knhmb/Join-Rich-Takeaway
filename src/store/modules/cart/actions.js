import axios from "axios";

export default {
    async cashPayment(_, payload) {
        const response = await axios.post('/api/v1/platform/checkout/cash', payload)
        window.location.href = response.data.redirect
    },
    async stripePayment(_, payload) {
        const response = await axios.post('/api/v1/platform/checkout/stripe', payload)
        window.location.href = response.data.redirect
    },
    async ewalletPayment(_, payload) {
        const response = await axios.post('/api/v1/platform/checkout/ewallet', payload)
        window.location.href = response.data.redirect
    },
    async addToCart(context, payload) {
        const response = await axios.put('/api/v1/platform/cart/@me', payload)
        context.commit('CART_ITEMS', response.data)
    },
    async getOrderDetails(context, payload) {
        const response = await axios.get(`/api/v1/platform/orders/${payload}`)
        context.commit('SET_ORDER_DETAILS', response.data)
    },
    async getOrders(context) {
        const response = await axios.get('/api/v1/platform/orders')
        context.commit('SET_ORDERS', response.data.items)
    }
};
