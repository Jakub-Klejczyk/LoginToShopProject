<template>
  <div class="container">
    <div class="form-cont">
      <Form id="form" />
    </div>
  </div>
</template>

<script>
import Form from "../components/Form.vue";

export default {
  components: {
    Form,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  margin-top: 10vh;
}
.form-cont {
  height: 80vh;
  display: flex;
  align-items: center;
}
h1 {
  color: white;
  height: 10vh;
}
</style>
