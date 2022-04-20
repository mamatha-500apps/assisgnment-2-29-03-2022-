<template>
  <div>
    Firstname:<input type="text" v-model="firstname" /><br />
    Lastname:<input type="text" v-model="lastname" /><br />
   <h1>{{ firstname }}{{ lastname }}</h1>
  </div>
</template>
<script>
export default {
  name: "QuestioN5",
  data() {
    return {
      firstname:" ",
      lastname: " ",
    };
  },
  computed: {
    name: (function (firstname, lastname) {
      return firstname + " " + lastname;
    })(),
  },
};
</script>




