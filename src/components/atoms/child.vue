<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <span class="headline">Child Form</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="param" label="input 1"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Child",
  components: {},
  data: () => ({}),
  props: ["param"],
  methods: {},
  updated: function() {
    this.$emit("input", this.param);
  }
};
</script> 

<style>
.bar {
  color: #fff;
}

.content {
  text-align: right;
}
.card {
  margin: 10px;
  padding-bottom: 10px;
}
</style>