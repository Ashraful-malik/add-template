<template>
  <div>
    <b-navbar toggleable="sm" type="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand class="ml-2">TemplateZone</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav class="float-right">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/" class="links">Home </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/templates" class="links">Templates </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/add" class="links" v-if="user.role === 'admin'"
              >Add Template
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <b-button
              variant="outline-dark text-white"
              @click.prevent="handleclick"
              v-if="user"
              >Logout
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import cookies from "js-cookie";
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["user"]),
  },

  methods: {
    handleclick() {
      cookies.remove("token");
      this.$store.dispatch("user", "");
    },
  },
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
