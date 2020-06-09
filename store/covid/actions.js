import Api from '../../lib/Api'

const api = Api.create()

export default {
  async getGlobal ({ commit }, data) {
    commit('getGlobalRequest')

    const response = await api.getTotal(data)
    console.log('=== pentil ===', response)

    if (response.ok) {
      commit('getGlobalSuccess', response.data) // response.data.data
    } else {
      commit('getGlobalFailure', response)
    }
  },

  async getHarian ({ commit }, data) {
    commit('getHarianRequest')

    const response = await api.getHarian(data)
    console.log('=== tt ===', response)

    if (response.ok) {
      commit('getHarianSuccess', response.data.data)
    } else {
      commit('getHarianFailure', response)
    }
  }
}