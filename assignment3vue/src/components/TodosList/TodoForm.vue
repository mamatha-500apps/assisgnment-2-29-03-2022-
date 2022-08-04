<template>
  <form class="todo-form" @submit="submitTodo">
    <div>
      <b-container class="bv-example-row">
    <b-row class="justify-content-md-center mb-2">
      <b-col cols="10" >
      <b-form-input
        class="todo-input"
        name="todo"
        v-model="todo"
        placeholder="Start typing..."
        required
      />
      </b-col>
       <!-- <b-col class="px-2">
         <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
      </b-col> -->
      <b-col >
      <b-button class="todo-btn" type="submit">Add Todo</b-button>
      </b-col>
     
      </b-row>
      </b-container>
      <div>
   
  </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      todo: "",
         value: ''
    };
  },
  mounted() {},
  methods: {
    submitTodo: function (event) {
      event.preventDefault();
      this.$store.commit("addTodo", this.todo);
      this.todo = "";
    },
  },
};
</script>
