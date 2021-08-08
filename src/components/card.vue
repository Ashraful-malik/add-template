<template>
  <div class="container">
    <div class="align_cards">
      <div v-for="(template, index) in alltemplates" :key="index">
        <b-card
          :img-src="template.image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 25rem;"
        >
          <b-button :href="template.link" target="blank">
            Code <i class="fas fa-code"></i>
          </b-button>
          <router-link
            :to="{ name: 'template', params: { id: template._id } }"
            class="text-white btn m-3"
            style="text-decoration:none"
          >
            view
            <i class="fas fa-eye"></i>
          </router-link>
          <i
            v-if="user"
            class="far fa-trash-alt delete"
            @click="deleteitem"
            :id="template._id"
          ></i>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "card",
  props: ["alltemplates"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    deleteitem: (event) => {
      const id = event.target.id;
      axios
        .delete(`https://templatezone.herokuapp.com/deletetemplate/${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.delete {
  font-size: 1.5rem;
  margin: 1rem;
  color: red;
  cursor: pointer;
}
.btn {
  background: linear-gradient(90deg, #bb88f0 0%, #4e5fc6 130.29%);
  box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: white;
  border: none;
}
.card {
  margin: 1rem 1rem;
}
.align_cards {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
}

@media screen and (max-width: 800px) {
  .align_cards {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
  }
}
@media screen and (max-width: 400px) {
  .align_cards {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 1rem;
  }
}
</style>
