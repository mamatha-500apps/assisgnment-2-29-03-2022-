<template>
    <div>
<QuestionSix  :msg="msg" ref="refo" :name="name"/>
    <button @click="func()">ClickMe</button>
    </div>
</template>
<script>
import QuestionSix from '../components/QuestionSix.vue'
export default 
   {
       components:{
           QuestionSix
       },
       data(){
  return{
    msg:"Hi",
    name:"Mamatha" }  },

       methods:{
           func(){
  this.$refs.refo.fun();
}
       }
   }
   
</script>
