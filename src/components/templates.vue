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
      .get("https://templatezone.herokuapp.com/template")
      .then((response) => {
        this.alltemplates = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped></style>
