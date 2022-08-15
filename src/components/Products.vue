<template>
  <div class="products">
    <div class="product" v-for="(product, index) in prods" :key="index">
      <img :src="product.img" :alt="product.name" />
      <div class="action">
        <p>{{ product.name }}</p>
        <button @click="$store.commit('addToCart')">+</button>
        <button>-</button>
      </div>
    </div>
  </div>
</template>

<script>
import NikeAirForce1 from "../assets/products/NikeAirForce1.jfif";
import NikeAirMax2021 from "../assets/products/NikeAirMax2021.jfif";
import NikeAirMax270 from "../assets/products/NikeAirMax270.jfif";
import NikeAirMax97 from "../assets/products/NikeAirMax97.jfif";
import NikeAirMaxGenome from "../assets/products/NikeAirMaxGenome.jfif";
import NikeAirPresto from "../assets/products/NikeAirPresto.jfif";
import NikeAirZoomPegasus37 from "../assets/products/NikeAirZoomPegasus37.jfif";
import NikeAndRtfkt from "../assets/products/NikeAndRtfkt.jfif";
import NikeRevolution6 from "../assets/products/NikeRevolution6.jfif";

export default {
  name: "Products",
  data() {
    return {
      prods: [
        {
          name: "Nike Air Force 1",
          img: NikeAirForce1,
        },
        {
          name: "Nike Air Max 2021",
          img: NikeAirMax2021,
        },
        {
          name: "Nike Air Max 270",
          img: NikeAirMax270,
        },
        {
          name: "Nike Air Max 97",
          img: NikeAirMax97,
        },
        {
          name: "Nike Air Max Genome",
          img: NikeAirMaxGenome,
        },
        {
          name: "Nike Air Presto",
          img: NikeAirPresto,
        },
        {
          name: "Nike Air Zoom 37",
          img: NikeAirZoomPegasus37,
        },
        {
          name: "Nike And Rtfkt",
          img: NikeAndRtfkt,
        },
        {
          name: "Nike Revolution 6",
          img: NikeRevolution6,
        },
      ],
    };
  },
};
</script>

<style scoped>
.products {
  max-width: 40rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;
  color: white;
}
.product {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}

img {
  width: 80%;
  max-height: 100px;
}

.action {
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  cursor: pointer;
}
.info {
  position: absolute;
  bottom: 12vh;
}
</style>
