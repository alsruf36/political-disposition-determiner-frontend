import axios from 'axios'

const axiosInstanceAPI = axios.create({
  baseURL: 'http://mingyeol.com:1303/_/api',
  withCredentials: false,
})


export default {
  async get_content({ commit }) {
    commit('set_status_start')
    return await new Promise((resolve, reject) => {
      axiosInstanceAPI
        .get('/article')
        .then((resp) => {
          window.console.log('[debug] article resp', resp)
          const obj = resp.data
          commit('set_content', obj)
          resolve(resp)
        })
        .catch((err) => {
          commit('set_status_fail', err)
          console.log(err)
        })
    })
  },
}