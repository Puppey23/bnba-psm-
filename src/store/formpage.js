const state = {
  title: "",
};

const mutations = {
  setTitle: (state, value) => (state.title = value),
};

export default {
  namespaced: true,
  state,
  mutations,
};
