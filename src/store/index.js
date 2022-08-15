import { advancePositionWithClone } from "@vue/compiler-core";
import { createApp, VueElement } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    currentUser: {
      mail: "",
      password: "",
      logged: false,
      loggedUserId: 0,
    },
    users: [
      {
        userId: 1,
        mail: "jebac-pis@pis.pl",
        password: "JebacPis123",
      },
    ],
    textInfo: "",
    products: [
      {
        id: 1,
        name: "Nike Air Force 1",
        img: "NikeAirForce1",
        price: 20,
        inStock: false,
      },
      {
        id: 2,
        name: "Nike Air Max 2021",
        img: "NikeAirMax2021",
        price: 20,
        inStock: false,
      },
      {
        id: 3,
        name: "Nike Air Max 270",
        img: "NikeAirMax270",
        price: 20,
        inStock: false,
      },
      {
        id: 4,
        name: "Nike Air Max 97",
        img: "NikeAirMax97",
        price: 20,
        inStock: false,
      },
      {
        id: 5,
        name: "Nike Air Max Genome",
        img: "NikeAirMaxGenome",
        price: 20,
        inStock: false,
      },
      {
        id: 6,
        name: "Nike Air Presto",
        img: "NikeAirPresto",
        price: 20,
        inStock: false,
      },
      {
        id: 7,
        name: "Nike Air Zoom 37",
        img: "NikeAirZoomPegasus37",
        price: 20,
        inStock: false,
      },
      {
        id: 8,
        name: "Nike And Rtfkt",
        img: "NikeAndRtfkt",
        price: 20,
        inStock: false,
      },
      {
        id: 9,
        name: "Nike Revolution 6",
        img: "NikeRevolution6",
        price: 20,
        inStock: false,
      },
    ],
    shoppingCart: {
      cartId: 0,
      userId: 0,
      userPoints: 100,
      productsInStock: {
        id: 0,
        quantity: 0,
        full: false,
      },
      totalPrice: 0,
    },
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
        state.currentUser.loggedUserId = 1;
        state.textInfo = "";
      } else {
        state.textInfo = "Invalid e-mail or password";
      }
    },
    addToCart(state, payload) {
      state.shoppingCart.cartId = 1;
      state.shoppingCart.userId = state.currentUser.loggedUserId;
      state.shoppingCart.productsInStock.id = 1;
      state.shoppingCart.productsInStock.quantity += 1;
      state.shoppingCart.productsInStock.full = true;
    },
  },
  actions: {
    login(state) {
      setTimeout(() => {
        this.commit("login");
      }, 1000);
    },
  },
  getters: {
    totalPrice(state) {
      return state.shoppingCart.productsInStock.quantity * 20;
    },
  },
});
