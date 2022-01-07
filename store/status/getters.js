export default {
  return_api_server_status(state) {
    console.log(state)
    return state.api_server_status
  },

  return_colab_server_status(state) {
    console.log(state)
    return state.colab_server_status
  }
}