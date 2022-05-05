<template>
  <div>
    <h4>name:{{ name }}</h4>
    <h4>number:{{ number }}</h4>
    <h4>Items:{{ Items }}</h4>
  </div>
</template> 
<script>
export default {
  name: "propS",
  components: {},
  props: {
    name: String,
    number: { 
      default: 1138,
       type: Number 
       },
    Items: Array,
  },
  methods: {
    fun() {
    alert("Child Progrom")
    },
    fun1() {
    alert("Child1 Progrom")
    },
  },
};
</script>