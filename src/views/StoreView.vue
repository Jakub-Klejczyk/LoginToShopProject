<template>
  <div class="container">
    <Products />
  </div>
</template>

<script>
import Products from "../components/Products.vue";

export default {
  components: {
    Products,
  },
};
</script>

<style scoped>
.container {
  margin-top: 10vh;
  color: white;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: c;
}
</style>
