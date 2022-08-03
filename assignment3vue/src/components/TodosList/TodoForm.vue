<template>
  <form class="todo-form" @submit="submitTodo">
    <div>
      <input
        class="todo-input"
        name="todo"
        v-model="todo"
        placeholder="Start typing..."
        required
      />
      <button class="todo-btn" type="submit">Add Todo</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      todo: "",
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
