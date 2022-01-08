import { updateField } from 'vuex-map-fields';

export default {
    set_status_start (state) {
      state.status = 'start'
    },

    set_result (state, res) {
      console.log('[debug] state ', state)

      if (res.status === 'fail') {
        state.status = 'fail'
        state.status_msg = res.reason
      }
      else if (res.status === 'success'){
        state.analyzed = res.result
        state.status = 'success'
        state.status_msg = 'success'
      }
      else {
        console.log('exception in news/mutations/set_result with not known status')
      }
    },

    updateField,
  }  