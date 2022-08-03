import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "todoslist",
});
const store = new Vuex.Store({
  plugins: [vuexLocal.plugin],
  namespaced: true,
  state: {
    todoList: [],
  },
  mutations: {
    addTodo(state, title) {
      state.todoList = [
        ...state.todoList,
        {
          id: Math.random(),
          title,
          completed: false,
        },
      ];
    },
    addTodos(state, todos) {
      state.todoList = todos;
    },
    updateTodo(state, todoId) {
      state.todoList = state.todoList.map((item) => {
        if (item.id === todoId) {
          item.completed = !item.completed;
        }
        return item;
      });
    },
  },
  // This should be pasted after the mutations property
  getters: {
    completeTodosLength: (state) => {
      const completeTodos = state.todoList.filter((item) => item.completed);
      return completeTodos.length;
    },
  },
});
export default store;
