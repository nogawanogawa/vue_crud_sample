<template>
  <v-layout>
    <v-flex xs12>
      <FilePicker v-model="uploadFile"/>
    </v-flex>
  </v-layout>
</template>

<script>
import FilePicker from "@/components/atoms/FilePicker.vue";
import axios from "axios";

export default {
  name: "Parent",
  data() {
    return {
      uploadFile: []
    };
  },
  components: {
    FilePicker
  },
  methods: {
    register_image: function() {
      let formData = new FormData();
      formData.append("uploadFile", this.uploadFile[0]);
      let config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      axios.post("http://localhost:5000/troublesheet/image", formData, config);
    }
  }
};
</script>

