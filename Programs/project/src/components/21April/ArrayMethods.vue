<template>
    <div>
        <button @click="fun()">ForEach</button>
        <button @click="fun1()">Find</button>
        <button @click="fun2()">Filter</button>
        <button @click="fun3()">Map</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
          array1 :[0,1,2,2.1,3.3,3],
        }
    },
    methods:{
        fun()
        {
this.array1.forEach(element =>document.write(element+"<br>"));
        },
        fun1()
        {            
const a = this.array1.find(element => element ==2);
document.write(a);
document.write(this.array1.findIndex(a))
        },
        fun2()
        {
   const a=this.array1.filter(element =>element==3);
   document.write(a);
        },
        fun3(){
const root = this.array1.map((num) => Math.sqrt(num));
document.write(root);
        },
       
        }
}
</script>
