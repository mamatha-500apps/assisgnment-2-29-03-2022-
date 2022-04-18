<template>
    <div>
        <h1>Using Fetch</h1>
        <button @click=fun()>click me</button>
        </div>
</template>
<script>
export default {
    name:"FeTch",   
        data(){
            return{
            }
        },
    methods:{
fun()
{  
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
}
}
}
</script>
