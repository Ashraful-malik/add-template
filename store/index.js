import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  imageLink: "",
};

const store = new Vuex.Store({
  state,
  getters: {
    imageLink: (state) => {
      return state.user;
    },
  },
  actions: {
    imageLink(context, imageLink) {
      context.commit("imageLink", imageLink);
    },
  },
  mutations: {
    imageLink(state, imageLink) {
      state.imageLink = imageLink;
    },
  },
});
export default store;
