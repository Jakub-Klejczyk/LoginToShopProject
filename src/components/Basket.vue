<template>
  <div class="basket">
    <h1 v-if="productsInBasket === 0">There is no products in basket.</h1>
    <div v-else>
      <p>hi</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productsInBasket: 0,
    };
  },
  components: {},
};
</script>

<style scoped>
.basket {
  height: 80vh;
  width: 100vw;
  margin-block: 10vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
