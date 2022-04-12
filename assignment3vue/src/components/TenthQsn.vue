<template>
    <div>
        <form name="myform" method="post" onsubmit="fun()">
            Enter your FirstName:<input type="text" name="Fname" placeholder="Enter Your Firstname" required ><br>
            <br>
             Enter your LastName:<input type="text" name="Lname" placeholder="Enter Your Lastname" required ><br><br>
             <button @click="fun()">Login</button>

        </form>
    </div>
</template>
<script>

export default
 {
   name:"TenthQsn",
   data(){
       return{

       }
   },
   methods:{
    fun(){
        document.write("FullName : "+document.myform.Fname.value+" "+document.myform.Lname.value)
    }
       
   }
}
</script>

