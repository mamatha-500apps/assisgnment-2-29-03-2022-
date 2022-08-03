<template>
  <div>
    <div class="todo-list">
      <b-button block v-b-toggle.accordion-1 variant="info">Tasks</b-button>
      <div class="todo-item" v-for="todo in todos" :key="todo.id">
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-list-group>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <p>{{ todo.title }}</p>
              <b-form-checkbox
                class="checkbox"
                type="checkbox"
                name="todo.id"
                v-on:change="updateTodo(todo)"
                v-bind:checked="todo.completed"
              />
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </div>
      <p>Completed Todos: {{ todosCount }}</p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todoList;
    },
    todosCount() {
      return this.$store.getters.completeTodosLength;
    },
  },
  methods: {
    updateTodo: function (todo) {
      this.$store.commit("updateTodo", todo.id);
    },
  },
};
</script>
