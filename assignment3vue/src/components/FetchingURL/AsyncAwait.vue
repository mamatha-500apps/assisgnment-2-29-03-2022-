<template>
    <div>
        <h1>Using Async/Await
        </h1>
        <button @click="getData()">Clickhere</button>
    </div>
</template>
<script>
export default {
    name:"ASYnc",
    data(){
return{

}
    },
    methods:{
      async getData() {
try {
let response = await fetch(
"https://jsonplaceholder.typicode.com/todos/1"
)
console.log(response);
} catch (error) {
console.log(error);
    }
    },
    }
}
</script>
