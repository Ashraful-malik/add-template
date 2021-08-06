<template>
  <div>
    <div class="hero">
      <navbar />
      <b-container class="bv-example-row">
        <b-row class="row">
          <b-col>
            <div class="content">
              <h1>
                Get free Templates Codes for your Projest
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                provident .saepe iusto maxime. Provident, eveniet nostrum?
              </p>
              <router-link to="/templates" class="btn">
                <h5 class="m-1">Get Start</h5>
              </router-link>
            </div>
          </b-col>

          <b-col><img src="../assets/man.svg" alt="" class="image"/></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
export default {
  name: "home",
  components: {
    navbar,
  },
};
</script>

<style scoped>
.content {
  margin-top: 5rem;
}
.hero {
  width: 100%;
  height: 100vh;
  background: url(../assets/Rectangle.svg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.row {
  margin-top: 4rem;
}
.image {
  height: 400px;
  width: 561px;
}
h1 {
  font-size: 52px;
  color: white;
  font-family: "Roboto", sans-serif;
}
p {
  margin-top: 10px;
  font-family: sans-serif;
  /* width: 30rem; */
  color: rgb(211, 211, 211);
}
.btn {
  margin: 1.5rem 0;
  background: linear-gradient(90deg, #bb88f0 0%, #4e5fc6 130.29%);
  box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 211px;
  height: 50px;
  color: white;
}

/* nobile responsive */
@media screen and (max-width: 700px) {
  .row {
    display: flex;
    align-items: center;
    justify-content: center !important;
    flex-direction: column-reverse !important;
  }
  .image {
    max-width: 100%;
    height: auto;
  }
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 13px;
  }
}
</style>
