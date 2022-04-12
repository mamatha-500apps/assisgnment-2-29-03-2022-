<template>
    <div>
        <button @click="fun()">ClickMe</button>
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
fun()
{
 document.write("First");
},
fun1(a){
    document.write("Second");
    a(this.fun);
},
fun1(fun);
  }
}
</script>
