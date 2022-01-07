import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://mingyeol.com:1303/_/api',
  withCredentials: false,
})
export default {
  async get_api_server_status({ commit }) {
    return await new Promise((resolve, reject) => {
      axiosInstance
        .get('/heartbeat')
        .then((resp) => {
          window.console.log('[debug] heartbeat resp', resp)
          const obj = resp.data
          commit('set_api_server_status', obj)
          resolve(resp)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}