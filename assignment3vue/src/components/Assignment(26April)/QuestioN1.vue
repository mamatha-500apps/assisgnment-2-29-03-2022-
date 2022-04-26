<template>
    <div>
        <h1>Question 1 </h1>
        <button @click="fun()">Alphabetical</button>
        <button @click="fun1()">Reverse</button>
    </div>
</template>
<script>
export default
{
    name:"QuestioN1",
    data(){
        return{
 Users :
[{name:'500apps',id:1},{name:'Technologies',id:2},{name:'Agile',id:3},
{name:'Mantra',id:4},{name:'Clockly',id:5},{name:'CRM',id:6},
{name:'500apps',id:7}],
field:"name",
reverse:"",
Alphabetic:""}
    },
    methods:{
 fun()
{ 
this.Alphabetic=this.Users.sort((a, b) => (a[this.field] || "").toString().localeCompare((b[this.field] || "").toString()));
this.Alphabetic.forEach(element =>document.write(JSON.stringify(element)+"<br>"));
},
 fun1()
   {
    this.reverse=this.Users.sort((a, b) => (a[this.field] || "").toString().localeCompare((b[this.field] || "").toString())),
    document.write(JSON.stringify(this.reverse.reverse()))
  }
    }
}
</script>
