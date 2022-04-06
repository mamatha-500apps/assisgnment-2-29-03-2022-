<template><div>
    <h1>Question-8</h1>
    <table align="center">

<thead>

<tr>

<th>Email</th>

<th>Id</th>

<th>Name</th>

</tr>

</thead>

<tbody>

<tr v-for="arra in arra" :key="arra.id">
<td > {{arra.email}}</td>
<td>{{arra.id}}</td>

<td>{{arra.name}}</td>


</tr>

</tbody>

</table>


</div>
         
</template>
<script>

export default {
    name:'TaBle',
    data() {

return {
 arra: [
{email: 'Eliseo@gardner.biz',id: '1',name: "id labore ex et quamlaborum"}, 
{email: 'Jayne_Kuhic@sydney.com',id: '2',name: "quo vero reiciendisvelitsimiliqueearum"}, 
{email: 'Nikita@garfield.biz',id: '3',name: "odio adipisci rerumaut animi"}, 
{email: "Lew@alysha.tv",id: 4,name: "alias odio si"}
]
};

}

};

</script>
 <style scoped>

 table{

 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

 border-collapse: collapse;

 width: 50%;

 background-color: white;

 }

td, th {

 border: 5px solid #dddddd;
 text-align: left;

padding: 8px;

 }
</style>