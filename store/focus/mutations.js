export default {
  set_unfocus (state) {
    state.focusID = 0
  },

  set_focusID (state, id) {
    if (state.focusID === id) {
      state.focusID = 0
    }
    else{
      state.focusID = id
    }
    console.log(state.focusID)
  },
}  