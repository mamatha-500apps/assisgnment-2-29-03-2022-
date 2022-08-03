<template>
  <div id="app">
    <router-view />
    <TodoForm />
    <TodoList />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <FirstQn />
    <SecondQsn />
    <ThirdQsn />
    <FifthQsn />
    <TenthQsn />
    <EighthQsn />
    <SeventhQsn />
    <SixthQsn />
    <!-- <Dynamicpro1 :msg="msg" ref="refo" :name="name"/>
 <button @click="func()">click here</button> -->
    <CallBack />
    <QuestionSix />
    <QuestionSixa />
    <LoginForm />
    <TableVue />
    <QuestionFour />
    <FourthQsn5 />
    <Searching />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import FirstQn from './components/FirstQn.vue'
// import SecondQsn from './components/SecondQn.vue'
// import ThirdQsn from './components/ThirdQsn.vue'
//  import FifthQsn from './components/FifthQsn.vue'
// import SeventhQsn from './components/SeventhQsn.vue'
// import TenthQsn from './components/TenthQsn.vue'
// import EighthQsn from './components/EighthQsn.vue'
//import SixthQsn from './components/SixthQsn.vue'
//import Dynamicpro1 from './components/DynamicProp.vue'
// import CallBack from './components/CallBack.vue'
//  import TableVue from './components/TableVue.vue'
//  import LoginForm from './components/LoginForm.vue'
//import QuestionSix from './components/QuestionSix.vue'
//import QuestionSixa from './components/QuestionSixa.vue'
//import QuestionFour from './components/QuestionFour.vue'
// import FourthQsn5 from './components/FourthQsn5.vue'
//import Searching from './components/Searching.vue'
import TodoList from "./components/TodosList/TodoList.vue";
import TodoForm from "./components/TodosList/TodoForm.vue";
export default {
  name: "App",
  components: {
    TodoList,
    TodoForm,
    // HelloWorld,
    //  FirstQn,
    // SecondQsn,
    // ThirdQsn,
    // FifthQsn,
    //  TenthQsn,
    //  EighthQsn,
    // SeventhQsn,
    //SixthQsn,
    //Dynamicpro1,
    // CallBack
    // TableVue,
    // LoginForm
    //QuestionSix,
    //  QuestionSixa
    //QuestionFour
    //Searching
  },
  // data(){
  //   return{
  //     msg:"Hi",
  //     name:"Mamatha"
  //   }
  // },
  // methods:{
  //   func(){
  //   this.$refs.refo.fun();
  //  console.log("Executed")
  // }
  // }
  // props:{
  //   name:String,
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
