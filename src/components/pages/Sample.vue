<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12>
            <Parent/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Parent from "@/components/templates/parent.vue";

export default {
  name: "SearchPage",
  components: {
    Parent
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