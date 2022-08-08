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
    filterList: [],
  },
  mutations: {
    // For adding a single to-do item
    addTodo(state, title) {
      state.todoList = [
        {
          id: Math.random(),
          title,
          completed: false,
          date: `${new Date().getFullYear()}-0${
            new Date().getMonth()+1
          }-0${new Date().getDate()}`,
        },
        ...state.todoList,
      ];
    },
    // For adding an array of to-dos
    addTodos(state, todos) {
      state.todoList = todos;
    },


    // For updating the completed status of a to-do item
    updateTodo(state, todoId) {
      state.todoList = state.todoList.map((item) => {
        if (item.id === todoId) {
          item.completed = !item.completed;
        }
        return item;
      });
    },
    // Delete the each item in that array
    deleteTodo(state, id) {
      let list = state.todoList;
      for (var i = 0; i < list.length; i++) {
        if (list[i].id == id) return list.splice(i, 1);
      }
    },
    // For reset to filter the todoList
    resetTodo(state, todoList) {
      state.filterList = todoList;
    },
  },
 
  getters: {
    completeTodosLength: (state) => {
      const completeTodos = state.todoList.filter((item) => item.completed);
      return completeTodos.length;
    },
  },
});
export default store;