import axios from 'axios'

const axiosInstanceAPI = axios.create({
  baseURL: '/tamnon/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default {
  async get_result({ commit, state }) {
    commit('set_status_start')
    return await new Promise((resolve, reject) => {
      axiosInstanceAPI
        .get('/analyze', {
          params: {
            sentence: state.sentence,
            clean: "true",
            plural: "true"
          }
        })
        .then((resp) => {
          window.console.log('[debug] result resp', resp)
          const obj = resp.data
          commit('set_result', obj)
          resolve(resp)
        })
        .catch((err) => {
          commit('set_status_fail', err)
          console.log(err)
        })
    })
  },
}