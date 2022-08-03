<template>
  <div>
    <div class="todo-list">
      <div class="todo-item" v-for="todo in todos" :key="todo.id">
        <b-list-group>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <p>{{ todo.title }}</p>
            <b-form-checkbox
              type="checkbox"
              name="todo.id"
              v-on:change="updateTodo(todo)"
              v-bind:checked="todo.completed"
            />
          </b-list-group-item>
        </b-list-group>
      </div>
      <p>Completed Todos: {{ todosCount }}</p>
    </div>
  </div>
</template>
<script>
export default {
  created: function () {
    this.getTodos;
  },
  computed: {
    todos() {
      return this.$store.state.todoList;
    },
    todosCount() {
      return this.$store.getters.completeTodosLength;
    },
    getTodos() {
      return this.$store.dispatch("getTodos");
    },
  },
  methods: {
    updateTodo: function (todo) {
      this.$store.commit("updateTodo", todo.id);
      localStorage.setItem("todoslist", this.todo);
    },
  },
};
</script>
