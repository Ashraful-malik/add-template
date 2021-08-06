<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand>
        <router-link to="/" class="brandlogo">TemplateZone </router-link>
      </b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/" class="links">Home</router-link>
        </b-navbar-nav>
        <b-navbar-nav>
          <router-link to="/templates" class="links">Template</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar2",
};
</script>

<style scoped>
ul {
  margin-left: 1rem;
}
.links {
  /* margin: 1rem; */
  text-decoration: none;
  color: black;
}

.brandlogo {
  margin-left: 1rem;
  text-decoration: none;

  /* background: bisque; */
  /* color: black !important; */
}
</style>
