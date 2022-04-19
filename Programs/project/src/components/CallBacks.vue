<template>
    <div>
        <button @click="myCalculator(5,5,myDisplayer)">ClickMe</button>
    </div>
</template>
<script>
export default {
    name:"CallBack",
  data(){
      return{

      }
  },
  methods:{
  myDisplayer(something) {
 console.log(something)
},
myCalculator(num1,num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum)
},
  }
}
  
</script>
