<template>
    <div>
        <button @click="fun()">click here
            </button>
    </div>
</template>
<script>
export default {
   name:"QuestioN4",
   data(){
       return{

       }
   },
   methods:{
       fun(){
           var is_array = function(input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));      
       }
   }
}
</script>
