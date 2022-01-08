import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
  api_server_status: 'none',
  colab_server_status: 'none',
})

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}