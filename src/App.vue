<script>
import { RouterLink } from "vue-router";

export default {
  methods: {},
  computed: {},
};
</script>

<template>
  <div id="app">
    <nav>
      <ul>
        <li><RouterLink class="home" to="/">Home</RouterLink></li>
        <li>
          <RouterLink
            :class="['home', $store.state.currentUser.logged ? '' : 'disabled']"
            to="/store"
            >Store</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :class="['home', $store.state.currentUser.logged ? '' : 'disabled']"
            to="/cart"
            >Cart</RouterLink
          >
        </li>
      </ul>
    </nav>
    <RouterView />
    <footer>
      <h3>Copyright 2022</h3>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background-color: #000000;
  background-image: url("./assets/asfalt-light.png");
  height: 100vh;
  width: auto;
  overflow: hidden;
}
footer {
  color: black;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: absolute;
  bottom: 0%;
  width: 100vw;
}
nav {
  color: black;
  height: 10vh;
  background-color: white;
  position: absolute;
  top: 0%;
  width: 100vw;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
}
li {
  list-style: none;
  font-size: 1.6rem;
}
.home {
  text-decoration: none;
  color: black;
}
.disabled {
  pointer-events: none;
  opacity: 0.6;
}
</style>
