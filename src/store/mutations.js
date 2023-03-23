export default {
  TOGGLE_AUTH_DIALOG(state, payload) {
    state.authDialogVisible = payload;
  },
  TOGGLE_AUTH_TYPE(state, payload) {
    state.authType = payload;
  },
};
