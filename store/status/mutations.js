export default {
    set_api_server_status_pending (state) {
      state.api_server_status = 'pending'
    },

    set_api_server_status_false (state) {
      state.api_server_status = 'false'
    },

    set_api_server_status (state, status) {
      state.api_server_status = status
      console.log('[DEBUG] state ', state)
    }
  }