export default {
    set_api_server_status (state, status) {
      state.api_server_status = status
      console.log('[DEBUG] state ', state)
    }
  }