<template>
    <div>
     <b-form id="form">
      Enter First Name:<b-form-input id="fname" class="firstname" v-model="data1" placeholder="enter First Name"></b-form-input>
      Enter last Name:<b-form-input id="lname" class="lastname" v-model="data2" placeholder="enter last name">
      </b-form-input>
      <b-button @click="Add()">Add</b-button>
       <b-button @click="Delete()">Delete</b-button>
      <b-button @click="Update()">update</b-button>
    </b-form>
        <b-table striped hover :items="items" :fields="fields">
     <b-row><b-button @click="Add()">Add</b-button></b-row>
        </b-table>
        </div>
</template>
<script>
export default{
   name:"QuestioN3",
   data(){
       return{
      items: [{first_name:"Gugulothu",last_name:"Mamatha" }],
      fields: ["first_name","last_name"],
      data1:"",
      data2:""
       }
   },
   methods:{
       Add(){
           this.items.push({
               first_name: this.data1,
               last_name:this.data2
           }
           )
           this.data1="",
           this.data2=""
       },
       Delete(){
           this.items.pop();
       },
       Update(){
 
       }
   }
}
</script>
