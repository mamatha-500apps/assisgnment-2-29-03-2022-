<template>
    <div>
        <p>Fifth Question</p>
        <button @click="fun()">ClickHere</button>
    </div>
</template>
<script>

export default {
   name:"FifthQsn",
   data()
   {
       return{
val:"10",
       }
   },
   methods:{
       fun(){
        try
        {
        let test =this.val * 45;
        console.log(test);
        document.write(this.val);
        }
       catch(Error)
       {
    document.write("Error");
       }
       finally{
           alert("Finally Block is always Executed");
       }
      
   }
   }
}
</script>

