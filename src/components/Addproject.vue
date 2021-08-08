<template>
  <div>
    <navbar2 />
    <b-alert show dismissible v-if="errors.message">
      {{ errors }}
    </b-alert>
    <div class="container mt-5">
      <form v-on:submit.prevent="upload">
        <b-card class="card">
          <h1 class="text-center">Add Template</h1>
          imageLink
          <b-form-group
            id="input-group-1"
            label="Name of Template"
            label-for="input-1"
          >
            <b-form-input
              placeholder="Enter your name"
              v-model="form.templateName"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label="Add Code Links"
            label-for="input-1"
          >
            <b-form-input
              placeholder="code link"
              v-model="form.codelink"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Description"
            label-for="input-2"
          >
            <b-form-textarea
              id="textarea"
              placeholder="Enter something..."
              rows="3"
              required
              v-model="form.description"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <div class="inputfile">
            <h5>select Files</h5>
            <input
              ref="fileInput"
              type="file"
              @change="onFileChange"
              class="select_file"
              required
            />
          </div>
          <div class="view_image">
            <img
              class="imagePreviewWrapper"
              v-on:click="selectImage"
              :src="selectedImage"
            />
            <i class="far fa-images" v-if="!file" v-on:click="selectImage"></i>
          </div>
          <button class="btn" :disabled="!isButtonDisabled" type="submit">
            Add Template
          </button>
        </b-card>
      </form>
    </div>
  </div>
</template>

<script>
import navbar2 from "../components/navbar2.vue";
import api from "../api/axios.js";
import axios from "axios";

export default {
  name: "Addproject",
  data() {
    return {
      form: {
        templateName: "",
        codelink: "",
        description: "",
        imageUrl: "",
      },
      selectedImage: null,
      file: null,
      filelength: "",
      errors: [],
      isButtonDisabled: false,
      responseData: "",
    };
  },
  components: {
    navbar2,
  },

  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    onFileChange(e) {
      this.file = e.target.files[0];
      // preview image
      this.selectedImage = URL.createObjectURL(e.target.files[0]);
      this.filelength = e.target.files.length;
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append(
        "upload_preset",
        process.env.VUE_APP_CLOUDINARY_UPLOAD_PRESET
      );
      axios({
        url: process.env.VUE_APP_CLOUDINARY_URL,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData,
        onUploadProgress: (uploadeEvent) => {
          const progressbar = Math.round(
            (uploadeEvent.loaded / uploadeEvent.total) * 100
          );
          console.log(progressbar);
        },
      })
        .then((res) => {
          this.form.imageUrl = res.data.secure_url;
          // console.log(this.form.imageUrl);
          this.isButtonDisabled = true;
        })
        .catch((err) => {
          console.log(err);
          this.isButtonDisabled = false;
        });
    },

    // form uploade function
    upload: function() {
      api
        .post("https://templatezone.herokuapp.com/addtemplate", this.form)
        .then((res) => {
          this.responseData = res;
          this.$router.push("/templates");
        })
        .catch((err) => {
          this.errors = err;
        });
    },
  },
};
</script>

<style scoped>
.imagePreviewWrapper {
  width: 250px;
  height: 250px;
  display: block;
  cursor: pointer;
  background-size: cover;
  margin: 1rem;
}

.view_image {
  position: relative;
}
.fa-images {
  position: absolute;
  top: 30%;
  left: 9%;
  font-size: 5rem;
  cursor: pointer;
}
.select_file {
  display: none;
}
.inputfile {
  margin-top: 1rem;
}
.inputfile input {
  width: 300px;
}

.btn {
  margin-top: 1rem;
  background: rgb(64, 64, 248);
  color: #fff;
}
.card {
  margin: 1rem;
}
ul {
  list-style: none;
  display: flex;
}
ul li .links {
  margin: 1rem;
  text-decoration: none;
}
</style>
