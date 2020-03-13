<template>
  <div>
    <Child v-bind:param="param"/>
    Parent : {{param}}
  </div>
</template>

<script>
import Child from "@/components/atoms/child.vue";
export default {
  name: "Parent",
  data() {
    return {
      param: "hoge"
    };
  },
  components: {
    Child
  }
};
</script>

