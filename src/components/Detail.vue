<template>
  <div>
    <div class="container mt-3">
      <h2>App Name</h2>
      <p>Wed 14 2020</p>

      <b-img
        src="https://picsum.photos/1024/400/?image=41"
        fluid
        alt="Responsive image"
      ></b-img>
      <p class="descriptino m-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ea
        modi sed ex harum soluta rem sint cumque inventore ad ipsum eius alias
        corporis omnis eveniet tempore atque eaque!
      </p>
      <b-button variant="outline-primary" class="btn"
        >Get Code
        <i class="fas fa-file-code m-2"></i>
      </b-button>
      <!-- <h2>{{ id }}</h2> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    // Get the id
    // Call the api
    // On response
    // Save to the data
    // Display to template
  },
};
</script>

<style scoped>
.btn {
  width: 10rem;
}
p {
  font-family: sans-serif;
  max-width: 80%;
}
h2 {
  font-family: sans-serif;
}
</style>
