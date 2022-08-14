<template>
  <form @submit.prevent="submit">
    <label for="">E-mail</label>
    <input
      type="email"
      :value="$store.state.currentUser.mail"
      @change="updateMail($event, 'mail')"
    />

    <label for="">Password</label>
    <input
      type="password"
      :value="$store.state.currentUser.password"
      @change="updatePass($event, 'password')"
    />

    <input type="submit" value="Log In" />
    <p>{{ $store.state.textInfo }}</p>
  </form>
</template>

<script>
export default {
  name: "Form",

  methods: {
    updateMail(e, type) {
      this.$store.commit("updateMail", {
        value: e.target.value,
        type,
      });
    },
    updatePass(e, type) {
      this.$store.commit("updatePass", {
        value: e.target.value,
        type,
      });
    },
    submit(e) {
      this.$store.commit("login");
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
.disabled {
  pointer-events: none;
  opacity: 0.6;
}
</style>
