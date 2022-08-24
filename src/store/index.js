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
        mail: "jan-kowalski@wp.pl",
        password: "Kowalski123",
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
    shoppingCart: [
      {
        products: [
          {
            name: "",
            points: 0,
          },
        ],
        userPoints: 100,
        full: false,
      },
    ],
    cartInfo: "You can add only one item.",
  },
  mutations: {
    UPDATE_MAIL(state, mail) {
      state.currentUser.mail = mail;
    },
    UPDATE_PASS(state, pass) {
      state.currentUser.password = pass;
    },
    LOGIN(state) {
      if (
        state.currentUser.mail === state.users[0].mail &&
        state.currentUser.password === state.users[0].password
      ) {
        const { currentUser } = state;
        currentUser.logged = true;
        currentUser.loggedUserId = 1;
        currentUser.mail = "";
        currentUser.password = "";
        state.textInfo = "";
      } else {
        state.textInfo = "Invalid e-mail or password";
      }
    },
    ADD_TO_CARD(state, payload) {
      const { currentUser, users, textInfo, products, shoppingCart } = state;
      if (shoppingCart[0].full === false) {
        shoppingCart[0].full = true;
        shoppingCart[0].products[0].name = payload[0];
        shoppingCart[0].products[0].points = payload[1];
      } else {
        state.cartInfo = "You have already added an item!";
        setTimeout(() => {
          state.cartInfo = "You can add only one item.";
        }, 5000);
      }
    },
    DEL_FROM_CARD(state) {
      const { currentUser, users, textInfo, products, shoppingCart } = state;
      shoppingCart[0].full = false;
      shoppingCart[0].products[0].name = "";
      shoppingCart[0].products[0].points = 0;
    },
  },
  actions: {
    login(state) {
      setTimeout(() => {
        this.commit("LOGIN");
      }, 1000);
    },
    changeMail(state, mail) {
      this.commit("UPDATE_MAIL", mail);
    },
    changePass(state, pass) {
      this.commit("UPDATE_PASS", pass);
    },
    addToCart(state, payload) {
      this.commit("ADD_TO_CARD", payload);
    },
    delFromCart(state) {
      this.commit("DEL_FROM_CARD");
    },
  },
  getters: {
    totalPrice(state) {
      return state.shoppingCart[0].products[0].points;
    },
    getUserPoints(state) {
      return state.shoppingCart[0].userPoints;
    },
    pointsAfterShopping(state) {
      return (
        state.shoppingCart[0].userPoints -
        state.shoppingCart[0].products[0].points
      );
    },
    productInCart(state) {
      return state.shoppingCart[0].products[0].name;
    },
    emptyCart(state) {
      return state.shoppingCart[0].full;
    },
  },
});
