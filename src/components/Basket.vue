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
      <button :class="['button', pointsAfterShopping <= 0 ? 'disabled' : '']">
        Buy
      </button>
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
  width: 60vh;
  margin: 10vh auto;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dis {
  width: 22rem;
  padding-block: 2rem;
  transform: scale(1.8);
  text-align: center;
}
.disabled {
  pointer-events: none;
  opacity: 0.6;
}
.button {
  cursor: pointer;
  position: absolute;
  bottom: 20vh;
  left: 50vw;
  transform: translateX(-50%);
  padding: 0.6rem 2rem;
}
</style>
