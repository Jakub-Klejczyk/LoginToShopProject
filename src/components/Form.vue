<template>
  <form @submit.prevent="submit">
    <label for="">E-mail</label>
    <input id="email" type="email" :value="mail" @change="updateMail($event)" />

    <label for="">Password</label>
    <input
      id="pass"
      type="password"
      :value="mail"
      @change="updatePass($event)"
    />

    <input type="submit" value="Log In" />
    <p>{{ textInfo }}</p>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Form",
  computed: {
    ...mapState(["textInfo", "currentUser", "log"]),
  },
  methods: {
    ...mapActions(["login", "changeMail", "changePass"]),
    updateMail(e) {
      this.changeMail(e.target.value);
    },
    updatePass(e) {
      this.changePass(e.target.value);
    },
    submit(e) {
      this.login();
      const email = document.querySelector("#email");
      const pass = document.querySelector("#pass");
      email.value = "";
      pass.value = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 20vw;
  height: 40vh;
  background-color: white;
  border-radius: 0.4rem;
  font-weight: 700;
  font-size: 1.2rem;
}
input {
  margin: 1rem 2rem;
  padding: 0.4rem;
}
.btn {
  margin: 1rem 2rem;
  padding: 0.4rem;
}
</style>
