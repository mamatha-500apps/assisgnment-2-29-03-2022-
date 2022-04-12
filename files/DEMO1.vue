<template>
    <div>
        <h1>DEMO</h1>
        <button @click="f1()">Submit</button>
        </div>
        </template>
<script>

export default {
    name:"DemoExample",
    data(){
        return{
          a :"hello world!"
        }
    },
    methods:{
        f1(){
          alert(this.a);
        }
    }
}
</script>
