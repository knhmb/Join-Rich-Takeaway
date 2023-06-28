export default {
    LOGIN(state, payload) {
        localStorage.setItem('accessToken', payload.accessToken)
        localStorage.setItem('refreshToken', payload.refreshToken)
        state.currentUser = payload.item
        state.isLoggedIn = true
    }
};
