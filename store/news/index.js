import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
  news_title: '',
  news_subtitle: '',
  news_summary: '',
  news_content: '',
})

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}