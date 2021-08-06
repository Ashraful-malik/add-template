<template>
  <div>
    <b-navbar toggleable="sm" type="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand class="ml-2">TemplateZone</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav class="float-right">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/templates" class="links">Home </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/templates" class="links">Templates </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/add" class="links">Add Template </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
#nav-collapse {
  align-items: center;
  justify-content: end;
  margin-right: 3rem;
}
.ml-2 {
  margin-left: 2rem;
  color: #fff !important;
}
.links {
  text-decoration: none;
  color: white;
}
</style>
