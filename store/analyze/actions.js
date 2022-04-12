import axios from 'axios'

const axiosInstanceAPI = axios.create({
  baseURL: 'http://localhost:2102/_/api',
  withCredentials: false,
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
            text: state.sentence
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