<template>
  <div>
    <b-form class="todo-form" @submit="submitTodo">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="11">
            <b-form-input
              class="todo-input"
              name="todo"
              v-model="todo"
              placeholder="Start typing..."
              required
            >
            </b-form-input>
          </b-col>
          <b-col cols="-1">
            <b-button class="todo-btn" type="submit" variant="warning"
              >AddTask</b-button
            >
          </b-col>
        </b-row>
      </b-container> </b-form
    ><br /><br />
    <b-row>
      <b-col cols="2">
        <b-form-datepicker
          id="example-datepicker"
          v-model="data"
          class="mb-2"
        ></b-form-datepicker>
        <b-button @click="submit()">Click! </b-button>
      </b-col>
      <b-col cols="9">
        <div class="todo-list">
          <b-button block v-b-toggle.accordion-1 variant="primary"
            ><p class="mb-0 d-flex align-items-center">Total Tasks</p>
            <p class="mb-2 d-flex align-items-right">
              Completed Tasks: {{ todosCount }}/{{
                $store.state.todoList.length
              }}
            </p></b-button
          >

          <div class="loading" v-show="loading">
            <b-spinner label="Loading..."></b-spinner> Loading
          </div>

          <div class="scrollbar scrollbar-primary">
            <div class="force-overflow">
              <div
                class="todo-item"
                v-for="(todo, index) in todos"
                :key="todo.id"
              >
                <b-collapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <div
                    class="mb-2 d-flex justify-content-between align-items-center"
                  >
                    {{ index + 1 }} . {{ todo.title }} {{ todo.date }}

                    <div>
                      <b-form-checkbox
                        class="checkbox mr-1"
                        type="checkbox"
                        name="todo.id"
                        v-on:change="updateTodo(todo)"
                        v-bind:checked="todo.completed"
                      ></b-form-checkbox>
                      <b-icon
                        class="mb-0 text-muted text-left"
                        icon="trash"
                        @click="deleteTask(todo.id)"
                        v-b-tooltip:hover
                        title="Delete"
                      ></b-icon>
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "LiSt",
  data() {
    return {
      todo: "",
      data: "",
      check: false,
      loading: false,
      errorMessage: false,
    };
  },
  computed: {
    // It have list of items which is entered in the input field
    todos() {
      return this.check
        ? this.$store.state.filterList
        : this.$store.state.todoList;
    },
    // For increasing the lenth of completed tasks
    todosCount() {
      return this.$store.getters.completeTodosLength;
    },
  },
  methods: {
    // To commit from the $store
    submitTodo() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
      this.check = false;

      this.$store.commit("addTodo", this.todo);

      // For empty the input field
      this.todo = "";
    },
    /**
     *  For commits a mutation for updating the completion status of a to-do item.
     * @param {Array} todo it have id,title,task status
     */
    updateTodo(todo) {
      this.$store.commit("updateTodo", todo.id);
    },
    /**
     *  For delete the item in the list.
     * @param {Array} id item id
     */
    deleteTask(id) {
      console.log("delete", id);
      this.$store.commit("deleteTodo", id);
      console.log("delete==============================================", id);
    },
    submit() {
      this.check = true;
      let filterList = this.$store.state.todoList.filter((item) => {
        return this.data === item.date;
      });
      this.$store.commit("resetTodo", filterList);
    },
  },
};
</script>
<style scoped>
.scrollbar {
  margin-left: 30px;
  float: left;
  height: 600px;
  width: 100%;
  background: #fff;
  overflow-y: scroll;
  margin-bottom: 25px;
}
.force-overflow {
  min-height: 450px;
}

.scrollbar-primary::-webkit-scrollbar {
  width: 7px;
  background-color: #f5f5f5;
}

.scrollbar-primary::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #4285f4;
}
</style>
