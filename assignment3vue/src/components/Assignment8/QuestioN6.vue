<template>
    <div>
        <Question6  :name="name" ref="refo" :contact="contact" />
        <button @click="func()"> refs</button>
    </div>
</template>
<script>
import Question6 from './QuestioN6a.vue'
export default {
   name:"ParenT",
   components:{
Question6
   },
   data(){
       return{
name:"Mamatha",
contact:"8466836076",
       }
   },
   methods:{
func(){
    alert("Hello");
    this.$refs.refo.fun();
}
   }
}
</script>
