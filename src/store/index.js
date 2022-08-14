import { createApp, VueElement } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    currentUser: {
      mail: "",
      password: "",
      logged: false,
    },
    users: [
      {
        mail: "jebac-pis@pis.pl",
        password: "JebacPis123",
      },
    ],
    textInfo: "",
  },
  mutations: {
    updateMail(state, payload) {
      state.currentUser.mail = payload.value;
    },
    updatePass(state, payload) {
      state.currentUser.password = payload.value;
    },
    login(state) {
      if (
        state.currentUser.mail === state.users[0].mail &&
        state.currentUser.password === state.users[0].password
      ) {
        state.currentUser.logged = true;
        state.textInfo = "";
      } else {
        state.textInfo = "Invalid e-mail or password";
      }
    },
  },
  actions: {},
  getters: {},
});
