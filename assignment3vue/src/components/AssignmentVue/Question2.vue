<template>
  <div>
    <h1>Question-2</h1>
    <table align="center">
      <thead>
          
      </thead>
      <tbody>
        <tr v-for="(table_data, index) in table_data" :key="index">  
        name:{{ table_data.name}}<br>
        description:{{table_data.description}}<br>
        Yearsofexperience:{{table_data.Yearsofexperience}}<br>
        Location:{{table_data.Location}}
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "QuestioN2",
  data() {
    return {
     table_data :[{ name :" Agile CRM" , description :" A company of excellence", Yearsofexperience:"12", Location:"Hyderabad"}]
    };
  },
};
</script>