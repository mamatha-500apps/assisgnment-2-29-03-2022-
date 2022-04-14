<template>
    <div>
   <b-card v-for="user in users" :key="user.name">
      <b-card-text>
     name:  {{user.name}}<br>
      description: {{user.description}}
      </b-card-text>
   </b-card>
    </div>
</template>
<script>
export default{
   name:"QuesTion6",
   data()
   {
       return{
       users : [{ name :"Agile CRM" , description :"A company of excellence"},
{name:"mantra technologies", description:"500apps" },
{name:"500apps Python",description:"Backend built using python" },
{name:"500apps infinity", description:"Builtusing vue JS" }]
   }
   }
   }
</script>
