<template>
  <div>
    <navbar2 />
    <card v-bind:alltemplates="alltemplates" />
  </div>
</template>

<script>
import card from "../components/card.vue";
import navbar2 from "../components/navbar2.vue";
import axios from "axios";

export default {
  name: "templates",
  components: {
    card,
    navbar2,
  },
  data() {
    return {
      alltemplates: "",
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:5000/template")
      .then((response) => {
        console.log(response.data);
        this.alltemplates = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped></style>
