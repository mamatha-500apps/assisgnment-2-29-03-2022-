<template>
    <div>
<h1>Login</h1>
<form name="myform" method="post" onsubmit="fun()" >  
        Enter Your UserName: <input type="text" name="name"  placeholder="Enter FirstName" required><br/>  <br>  
        Enter Your Password: <input type="text" name="password" placeholder="Enter LastName" required><br/>  
        <button @click="fun()">Submit
        </button>
        </form>  
    </div>
</template>
<script>
export default {
    name:"LOgin",
    data()
    {
        return {
        
        }
    },
    methods:{
        fun(){
      document.write("welcome"+"  "+document.myform.name.value+"  "+document.myform.password.value);
       }
    }
   
}
</script>
