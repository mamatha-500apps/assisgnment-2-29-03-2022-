<template>
  <div>
    <b-form id="form">
      Enter Text:<b-form-input
        id="name"
      v-model="lower"
        placeholder="Enter text"
      ></b-form-input>
    </b-form>
    <b-form>To UpperCase
     <b-form-input
        id="name"
       v-model="upper"
        placeholder="Enter product name"
      ></b-form-input>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "QuestioN2",
  data() {
    return {
      lower: "",
      upper: "",
    };
  },
  watch: {
    lower: function () {
      this.upper = this.lower.toUpperCase();
    },
  },
};
</script>







