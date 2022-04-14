<template>
    <div>
<QuestioN4a :msg="msg" :name="name"/>
    </div>
</template>
<script>
import QuestioN4a from './QuestioN4a.vue'
export default 
   {
       components:{
          QuestioN4a
       },
       data(){
  return{
    msg:"Hi",
    name:"Mamatha" }
     },
   }
   
</script>