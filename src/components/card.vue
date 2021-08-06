<template>
  <div class="container">
    <div class="align_cards">
      <div v-for="(template, index) in templates" :key="index">
        <b-card
          :img-src="template.image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 25rem;"
        >
          <b-button href="/home" target="blank">
            Code <i class="fas fa-code"></i>
          </b-button>
          <router-link
            :to="{ name: 'template', params: { id: template.id } }"
            class="text-white btn m-3"
            style="text-decoration:none"
          >
            view
            <i class="fas fa-eye"></i>
          </router-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      templates: [
        { id: 1, image: "https://picsum.photos/600/300/?image=25" },
        { id: 2, image: "https://picsum.photos/600/300/?image=25" },
        { id: 3, image: "https://picsum.photos/600/300/?image=25" },
        { id: 4, image: "https://picsum.photos/600/300/?image=25" },
      ],
    };
  },
};
</script>
<style scoped>
.btn {
  background: linear-gradient(90deg, #bb88f0 0%, #4e5fc6 130.29%);
  box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: white;
  border: none;
}
.card {
  margin-top: 1rem;
  /* box-shadow: 0px 5px 15px rgba(95, 95, 95, 0.25); */
}
.align_cards {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
  /* align-items: center; */
  /* justify-content: space-around; */
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
