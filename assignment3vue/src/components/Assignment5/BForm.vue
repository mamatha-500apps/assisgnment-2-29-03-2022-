<template>
  <div>
    <b-form id="form">
      Enter First Name:<b-form-input id="fname" class="firstname" placeholder="enter First name"></b-form-input>
      Enter LastName:<b-form-input id="lname" class="lastname" placeholder="enter Last name">
      </b-form-input>
      <b-button @click="Add()">Add</b-button><br><br>
      <b-button @click="Delete()">Delete</b-button>
    </b-form>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [{first_name:"Agile",last_name:"CRM" }],
      fields: ["first_name","last_name"],
    };
  },
  methods: {
    Add() {
      this.items.push(
     {first_name:(document.getElementById("fname").value),last_name:(document.getElementById("lname").value )}
      );
    },
    Delete() {
      this.items.pop();
    },
  },
};
</script>