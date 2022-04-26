<template>
    <div>
        <form name="myform">
         <input type="text" name="search"  id="word"  v-on:keyup="search()"  placeholder="search .." />
      </form>     
    <li>{{list[0]}}</li>
    <li>{{list[1]}}</li>
    <li>{{list[2]}}</li>
    <li>{{list[3]}}</li>
    <li>{{list[4]}}</li>
    {{match}}
        </div>
</template>
<script>
export default
{
    name:"QuestioN4",
    data(){
        return{
list : [ 'orange', 'red', 'blue', 'black', 'white' ],
match:""
        }
    },
    methods:
    {
      search(){
     let a = document.getElementById("word").value;
      const match = this.list.filter((element) => {
        if (element.includes(a)) {
          return true;
        }
      });
      document.write(match);
      if (match !== this.list) {
     console.log("NotFound")
      }
      }
} 
}
</script>
