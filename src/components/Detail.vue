<template>
  <div>
    <div class="container mt-3">
      <h2>{{ templatedata.name }}</h2>
      <p>{{ templatedata.createdAt }}</p>

      <b-img :src="templatedata.image" fluid alt="Responsive image"></b-img>
      <hr />
      <p class="descriptino m-2">
        {{ templatedata.details }}
      </p>
      <a :href="templatedata.link" target="_blank" rel="noopener noreferrer">
        <b-button variant="outline-primary" class="btn">
          Get Code
          <i class="fas fa-file-code m-2"></i>
        </b-button>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      id: "",
      templatedata: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    axios
      .get(`https://templatezone.herokuapp.com/template/${this.id}`)
      .then((response) => {
        this.templatedata = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.btn {
  width: 10rem;
}
a {
  text-decoration: none;
}
a:hover {
  color: rgb(255, 255, 255);
}
p {
  font-size: 1.5rem;
  font-family: sans-serif;
  max-width: 80%;
}
h2 {
  font-family: sans-serif;
}
.container {
  margin-bottom: 1rem;
}
</style>
