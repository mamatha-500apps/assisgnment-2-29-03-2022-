<template>
    <div>
        <button @click="fun()">divisible by 2</button>
    </div>
</template>
<script>
export default {
     name:"MapFunction",
     data(){
         return{
             a:[1,4,6,8,10]
         }
     },
     methods:{
         fun(){
const root = this.a.map((num) => (num)/2);
document.write(root);
         }
     }
}
</script>
