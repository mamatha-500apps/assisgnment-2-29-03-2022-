<template>
    <div>
    <h1>First Question</h1>
    <button @click="fun()">Inserting Elements </button>
        </div>
</template>
<script>
export default{
name:"FirsTQN",
data(){
return{
   a:[1,2,3,7,8,6,9,10]
}
},
methods:{
 fun(){
     this.a.splice(5, 0, 4, 5);
       document.write(this.a);
}
}
}
</script>