<template>
  <div>
    <navbar2 />
    <card />
  </div>
</template>

<script>
import card from "../components/card.vue";
import navbar2 from "../components/navbar2.vue";

export default {
  name: "templates",
  components: {
    card,
    navbar2,
  },
};
</script>
<style scoped></style>
