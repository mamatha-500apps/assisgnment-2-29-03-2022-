<template>
  <div >
         FirstName : <input type = "text" v-model = "firstname" /> <br/><br/>
         LastName : <input type = "text" v-model = "lastname"/> <br/><br/>
        FullName: {{getfullname}}
      </div>
</template>
<script>
export default {
  name: "QuestioN5",
  data() {
      return{
    firstname :"",
      lastname :"",
      }
  },
  computed: {
     getfullname : function(){
         return this.firstname +" "+ this.lastname;
      }
  },
};
</script>
