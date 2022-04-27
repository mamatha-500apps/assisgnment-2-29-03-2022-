<template>
    <div>
        <h1>Using Fetch</h1>
        <button @click=fun()>click me</button>
        <b-table striped hover :items="text" :fields="fields"></b-table>
        {{data1}}
        </div>
</template>
<script>
export default {
    name:"FeTch",   
        data(){
            return{
                text:this.data,
               fields: ['id', 'title','completed'],
            }
        },
    methods:{
fun()
{  
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data =>this.text=(data))
}
}
}
</script>
