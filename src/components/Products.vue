<template>
  <h3>{{ $store.state.cartInfo }}</h3>
  <div class="products">
    <div class="product" v-for="(product, index) in prods" :key="index">
      <img :src="product.img" :alt="product.name" />
      <div class="action">
        <p>{{ product.name }}</p>
        <button @click="ADD_TO_CARD([product.name, product.points])">+</button>
        <button @click="DEL_FROM_CARD()">-</button>
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

import { mapMutations } from "vuex";

export default {
  name: "Products",
  data() {
    return {
      prods: [
        {
          name: "Nike Air Force 1",
          img: NikeAirForce1,
          points: 90,
        },
        {
          name: "Nike Air Max 2021",
          img: NikeAirMax2021,
          points: 70,
        },
        {
          name: "Nike Air Max 270",
          img: NikeAirMax270,
          points: 50,
        },
        {
          name: "Nike Air Max 97",
          img: NikeAirMax97,
          points: 30,
        },
        {
          name: "Nike Air Max Genome",
          img: NikeAirMaxGenome,
          points: 70,
        },
        {
          name: "Nike Air Presto",
          img: NikeAirPresto,
          points: 10,
        },
        {
          name: "Nike Air Zoom 37",
          img: NikeAirZoomPegasus37,
          points: 20,
        },
        {
          name: "Nike And Rtfkt",
          img: NikeAndRtfkt,
          points: 50,
        },
        {
          name: "Nike Revolution 6",
          img: NikeRevolution6,
          points: 30,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["ADD_TO_CARD", "DEL_FROM_CARD"]),
  },
};
</script>

<style scoped>
h3 {
  position: absolute;
  top: 12vh;
}
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
