<template>
  <div>
    <h1>{{ timestamp }}</h1>
    <button @click="myfun()">Time</button>
  </div>
</template>
<script>
export default {
  name: "QuestioN3",
  data() {
    return {
      timestamp: "",
    };
  },
  methods: {
    myfun() {
      var today = new Date();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      setTimeout(() => {
        this.timestamp = time;
      }, 5000);
    },
  },
};
</script>





