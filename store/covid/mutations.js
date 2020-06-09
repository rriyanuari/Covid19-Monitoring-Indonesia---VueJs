export default {
  getGlobalRequest: (state, data) =>
    state.global = { ...state.global, fetching: true, error: null },
  getGlobalSuccess: (state, data) =>
    state.global = { ...state.global, data, fetching: false, error: null },
  getGlobalFailure: (state, error) =>
    state.global = { ...state.global, fetching: false, error },

  getHarianRequest: (state, data) =>
    state.harian = { ...state.harian, fetching: true, error: null },
  getHarianSuccess: (state, data) =>
    state.harian = { ...state.harian, data: data.reverse(), fetching: false, error: null },
  getHarianFailure: (state, error) =>
    state.harian = { ...state.harian, fetching: false, error },
  
}