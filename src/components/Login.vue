<template>
  <div class="container">
    <b-alert show dismissible v-if="error.message"> {{ error }} </b-alert>
    <div class="form">
      <b-form @submit="onSubmit">
        <h2 class="mt-4">Login</h2>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            placeholder="password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" class="mt-2">Submit</b-button
        ><br />
        <label for="home"><router-link to="/">Goback</router-link></label>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "js-cookie";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: [],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios
        .post("https://templatezone.herokuapp.com/login", this.form)
        .then((res) => {
          // console.log(res.data.token);
          // console.log(res.data.user);
          cookies.set("token", res.data.token);
          this.$store.dispatch("user", res.data.user);
          this.$router.push("/");
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
};
</script>
<style scoped>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 2rem;
}
</style>
