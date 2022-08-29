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
      {
        userId: 2,
        mail: "janusz-nowak@wp.pl",
        password: "Janusz123",
      },
    ],
    textInfo: "",
    products: [
      {
        id: 1,
        name: "Nike Air Force 1",
        img: "NikeAirForce1",
      },
      {
        id: 2,
        name: "Nike Air Max 2021",
        img: "NikeAirMax2021",
      },
      {
        id: 3,
        name: "Nike Air Max 270",
        img: "NikeAirMax270",
      },
      {
        id: 4,
        name: "Nike Air Max 97",
        img: "NikeAirMax97",
      },
      {
        id: 5,
        name: "Nike Air Max Genome",
        img: "NikeAirMaxGenome",
      },
      {
        id: 6,
        name: "Nike Air Presto",
        img: "NikeAirPresto",
      },
      {
        id: 7,
        name: "Nike Air Zoom 37",
        img: "NikeAirZoomPegasus37",
      },
      {
        id: 8,
        name: "Nike And Rtfkt",
        img: "NikeAndRtfkt",
      },
      {
        id: 9,
        name: "Nike Revolution 6",
        img: "NikeRevolution6",
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
        productsInCart: 0,
        totalPrice: 0,
      },
    ],
  },
  mutations: {
    UPDATE_MAIL(state, mail) {
      state.currentUser.mail = mail;
    },
    UPDATE_PASS(state, pass) {
      state.currentUser.password = pass;
    },
    LOGIN(state) {
      let i = false;
      state.users.forEach((user) => {
        if (
          state.currentUser.mail === user.mail &&
          state.currentUser.password === user.password
        ) {
          const { currentUser } = state;
          currentUser.logged = true;
          currentUser.loggedUserId = user.userId;
          currentUser.mail = "";
          currentUser.password = "";
          state.textInfo = "";
          i = true;
        }
      });
      if (!i) {
        state.textInfo = "Invalid e-mail or password";
      }
    },
    ADD_TO_CARD(state, payload) {
      const { currentUser, users, textInfo, products, shoppingCart } = state;
      shoppingCart[0].full = true;
      shoppingCart[0].products[shoppingCart[0].productsInCart].name =
        payload[0];
      shoppingCart[0].products[shoppingCart[0].productsInCart].points =
        payload[1];
      shoppingCart[0].productsInCart += 1;
      shoppingCart[0].totalPrice += payload[1];

      const newProd = {
        name: "",
        points: 0,
      };
      shoppingCart[0].products.push(newProd);
    },
    DEL_FROM_CARD(state, payload) {
      const { currentUser, users, textInfo, products, shoppingCart } = state;

      state.shoppingCart[0].products.forEach((product) => {
        if (product.name === payload[0]) {
          state.shoppingCart[0].products.splice(0, 1);
          shoppingCart[0].productsInCart -= 1;
          if (shoppingCart[0].productsInCart <= 0) {
            shoppingCart[0].full = false;
          }
          shoppingCart[0].totalPrice -= payload[1];
        }
      });
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
    delFromCart(state, payload) {
      this.commit("DEL_FROM_CARD", payload);
    },
  },
  getters: {
    totalPrice(state) {
      return state.shoppingCart[0].totalPrice;
    },
    getUserPoints(state) {
      return state.shoppingCart[0].userPoints;
    },
    pointsAfterShopping(state) {
      return (
        state.shoppingCart[0].userPoints - state.shoppingCart[0].totalPrice
      );
    },
    productInCart(state) {
      const prods = [];
      for (let i = 0; i < state.shoppingCart[0].products.length; i++) {
        prods.push(state.shoppingCart[0].products[i].name);
      }
      return prods.join(", ").slice(0, -2);
    },
    emptyCart(state) {
      return state.shoppingCart[0].full;
    },
  },
});
