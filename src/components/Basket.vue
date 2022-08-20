<template>
  <div class="basket">
    <h1 v-if="$store.state.shoppingCart.cartId === 0">
      There is no products in basket.
    </h1>
    <div v-else>
      <h2 class="dis">
        You have {{ $store.getters.displayUserPoints }} points for shopping
      </h2>
      <p class="dis">
        Product in you basket: {{ $store.getters.productInCart }}
      </p>
      <p class="dis">
        Total price of your cart is: {{ $store.getters.totalPrice }}.
      </p>
      <p class="dis">
        Your points after shopping:
        {{ $store.getters.pointsAfterShopping }}.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {},

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
.dis {
  padding-block: 2rem;
  transform: scale(2);
  text-align: center;
}
.disabled {
  pointer-events: none;
  opacity: 0.6;
}
.button {
  cursor: pointer;
}
</style>
