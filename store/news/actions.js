import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://mingyeol.com:1303/_/api',
  withCredentials: false,
})
export default {
  async get_content({ commit }) {
    return await new Promise((resolve, reject) => {
      axiosInstance
        .get('/article')
        .then((resp) => {
          window.console.log('[debug] article resp', resp)
          const obj = resp.data
          commit('set_content', obj)
          resolve(resp)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}