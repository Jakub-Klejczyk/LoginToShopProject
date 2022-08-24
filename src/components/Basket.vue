<template>
  <div class="basket">
    <h1 v-if="emptyCart === false">There is no products in basket.</h1>
    <div v-else>
      <h2 class="dis">You have {{ getUserPoints }} points for shopping</h2>
      <p class="dis">Product in you basket: {{ productInCart }}</p>
      <p class="dis">Total price of your cart is: {{ totalPrice }}.</p>
      <p class="dis">
        Your points after shopping:
        {{ pointsAfterShopping }}.
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "getUserPoints",
      "productInCart",
      "totalPrice",
      "pointsAfterShopping",
      "emptyCart",
    ]),
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
