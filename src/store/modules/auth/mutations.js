import setAuthHeader from "@/axios";


export default {
    LOGIN(state, payload) {
        localStorage.setItem('accessToken', payload.accessToken)
        localStorage.setItem('refreshToken', payload.refreshToken)
        setAuthHeader(payload.accessToken)
        state.currentUser = payload.item
        state.isLoggedIn = true
    },
    LOGOUT(state) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        state.currentUser = {}
        state.isLoggedIn = false
    },
    UPDATE_USER(state, payload) {
        state.currentUser = payload
    },
    SET_ADDRESSES(state, payload) {
        state.address = payload
    }
};
