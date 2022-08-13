<template>
  <form>
    <label for="">E-mail</label>
    <input type="email" name="" id="" />

    <label for="">Password</label>
    <input type="text" name="" id="" />

    <RouterLink class="btn" to="/store"
      ><input type="submit" value="Log In"
    /></RouterLink>
  </form>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "Form",
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
