<template>
<div>
    <h1>Second Question</h1>
     <form name="myform" method="post" onsubmit="validateform()" >  
        Enter a String: <input type="text" name="word"  placeholder="Enter text" required><br/>  <br>  
       <button @click="validateform()">Count</button> 
        </form>  
</div>
</template>
<script>

export default {
  name:"SecondQsn",
  data(){
      return{

      }
  },
  methods:{
validateform()
        {
        var e = document.myform.word.value;
     document.write("The Count of "  +  e  +" is  " + e.length);
      
        }
  }
}
</script>
