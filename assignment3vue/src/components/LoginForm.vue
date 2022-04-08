<template>
    <div>
        <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
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
