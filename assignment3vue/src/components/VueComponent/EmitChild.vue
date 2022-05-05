<template>
  <div><p @click="sample">login</p></div>
</template> 
<script>
export default {
  name: "emitEvent",
  components: {
  },
  methods: {
    sample() {
      this.$emit("login");
    },
  },
};
</script>


|
