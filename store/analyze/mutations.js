import { updateField } from 'vuex-map-fields';

export default {
    set_status_start (state) {
      state.status = 'start'
    },

    set_result (state, article) {
      console.log('[debug] state ', state)

      if (article.status === 'fail') {
        state.status = 'fail'
        state.status_msg = article.reason
      }
      else if (article.status === 'success'){
        state.analyzed = article.result
        state.status = 'success'
        state.status_msg = 'success'
      }
      else {
        console.log('exception in news/mutations/set_result with not known status')
      }
    },

    updateField,
  }  