<template>
  <div>
    <h1>Question-1</h1>
    <table align="center">
      <thead>
        <tr>
         
          <th>Name</th>
           <th>Id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(arra, index ) in arra" :key="index">
            
          <td>{{ arra.name}}</td>
          <td>{{index}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "QuestioN1",
  data() {
    return {
      arra:[{ name :" Agile CRM" , description :" A company of excellence"},
{name:"mantra technologies", description:"500apps" },{name:"500apps Python",
description:"Backend built using python" },{name:"500apps infinity", description:"Builtusing vue JS" }],
    };
  },
};
</script>