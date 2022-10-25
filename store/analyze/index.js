import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
  sentence: '',
  analyzed: '',
  status: 'none',
  status_msg: '',
})

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}