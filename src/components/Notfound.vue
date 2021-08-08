<template>
  <div>
    <div class="main">
      <h1>404</h1>
      <p>
        <router-link to="/"> Go Back </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.main::before {
  content: "Not Found";
  margin-left: -10rem;
  margin-bottom: -2rem;
  font-size: 1.2rem;
}
h1 {
  font-size: 15rem;
}
</style>
