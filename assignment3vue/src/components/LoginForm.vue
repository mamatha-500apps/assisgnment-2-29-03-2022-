<template>
    <div>
<h1>Question-9</h1>
<form name="myform" method="post" onsubmit="fun()" >  
        Enter Your Name: <input type="text" name="name"  placeholder="Enter FirstName" required><br/>  <br>  
        Enter Your Email:<input type="email" name="Email" placeholder="Enter Email" required><br/>  <br>
         Enter Your Age: <input type="number" name="Age"   placeholder="Enter Age" required><br/>  <br>
          Enter Your ContactNo: <input type="mobileno" name="Contact" placeholder="Enter ContactNo" required><br/>  
        <button @click="fun()">Save </button>
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
      document.write("welcome"+"  "+document.myform.name.value+"</br>Your MailID:  "+document.myform.Email.value+"</br> Your Age: "+document.myform.Age.value+"</br> Your Contact Number"+document.myform.Contact.value);
       }
    }
   
}
</script>
