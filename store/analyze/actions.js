import axios from 'axios'

const axiosInstanceAPI = axios.create({
  baseURL: 'http://mingyeol.com:1303/_/api',
  withCredentials: false,
})


export default {
  async get_result({ commit }) {
    commit('set_status_start')
    return await new Promise((resolve, reject) => {
      axiosInstanceAPI
        .get('/analyze')
        .then((resp) => {
          window.console.log('[debug] result resp', resp)
          const obj = resp.data
          commit('set_result', obj)
          resolve(resp)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}