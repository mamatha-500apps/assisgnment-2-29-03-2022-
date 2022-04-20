<template>
<div>
<b-form id="form">
      Enter Name:<b-form-input id="fname" class="firstname" placeholder="Enter Your Name"></b-form-input>
      Email :<b-form-input id="email" class="email" placeholder="Enter Your Email"> </b-form-input>
      Age :<b-form-input id="age" class="number" placeholder="Enter Your Age"></b-form-input>
      Contact :<b-form-input id="number" class="number" placeholder="Enter Your Mobile Number"></b-form-input>
      <b-button @click="Save()">save</b-button><br><br>
    </b-form>
    </div>
 </template>
<script>
  export default {
    name:"QuestioN9",
    data() {
      return {

      }
      },
  methods:{
Save(){
    document.write("welcome"+"</br>"+"Name : "+""+document.getElementById("fname").value+"</br>"+"EmailId : "+document.getElementById("email").value+"</br>"+"Age : "+document.getElementById("age").value+"</br>"+"Contact No : "+document.getElementById("number").value);
}
  }
  }
  </script>