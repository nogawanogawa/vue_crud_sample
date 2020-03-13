<template>
  <v-layout>
    <v-flex xs10>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs5 class="text-md-center">
          <div class="drop" @dragleave.prevent @dragover.prevent @drop.prevent="onDrop">
            <div class="drop_default-container">
              <input
                class="drop_input"
                name="file"
                type="file"
                accept="image/*"
                multiple="multiple"
                @change="onFileChange($event)"
              >
            </div>
          </div>
        </v-flex>
        <v-flex xs7 class="text-md-center">
          <v-card v-for="(image, index) in imageDatas" :key="image">
            <v-layout align-center justify-center row fill-height>
              <v-flex xs6>
                <v-layout align-start justify-start row fill-height>
                  <v-avatar class="badge" color="primary">
                    <span class="white--text headline">{{index+1}}</span>
                  </v-avatar>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-layout align-start justify-end row fill-height>
                  <v-btn color="error" fab medium depressed dark @click="del(index)">
                    <v-icon>clear</v-icon>
                  </v-btn>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-img :src="image"></v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "FilePicker",
  data() {
    return {
      imageDatas: [],
      uploadFile: [],
      isDrag: null
    };
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files;
      this.uploadFile = files;

      if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = e => {
          this.imageDatas.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    del(index) {
      this.imageDatas.splice(index, 1);
    }
  },
  updated: function() {
    this.$emit("input", this.uploadFile);
  }
};
</script>
