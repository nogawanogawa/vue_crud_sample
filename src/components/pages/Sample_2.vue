<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12>
            <ImageForm/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ImageForm from "@/components/templates/ImageForm.vue";

export default {
  name: "SamplePage",
  components: {
    ImageForm
  },
  props: {
    source: String
  },
  data: () => ({}),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>