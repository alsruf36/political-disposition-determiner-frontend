import { updateField } from 'vuex-map-fields';

export default {
    set_status_start (state) {
      state.status = 'start'
    },

    set_status_fail (state, msg) {
      state.status = 'fail'
      state.status_msg = msg
    },

    set_result (state, res) {
      console.log('[debug] state ', state)
      state.analyzed = res
      state.status = 'success'
      state.status_msg = 'success'
    },

    updateField,
  }  