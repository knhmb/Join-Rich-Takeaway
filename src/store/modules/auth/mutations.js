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
    SET_USER_VALIDITY(state) {
        state.isLoggedIn = true
    },
    UPDATE_USER(state, payload) {
        state.currentUser = payload
    },
    SET_ADDRESSES(state, payload) {
        state.address = payload
    },
    SET_BOOKMARKS(state, payload) {
        state.bookmarks = payload
    }
};
