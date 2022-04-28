<template>
<div class="overflow-auto">
<b-form-select v-model="value" :options="countries" ></b-form-select>
<b-pagination v-model="currentPage" :total-rows="rows" :per-page="pageSize" aria-controls="my-table">
</b-pagination>
<p class="mt-3">Current Page: {{ currentPage }}</p>
<button @click='fun()' >Submit</button>
<b-table id="my-table" :items="items" :per-page="pageSize" :current-page="currentPage" small></b-table> 
<b-container mt="5">
<div class="row mt=5" id="mytable">
<div class="col-md-6">
<div class="p-2 alert alert-secondary">
<h3>University Name</h3>
<draggable class="list-group kanban-column" group="tasks">
<div class="list-group-item" v-for="value in countries" :key="value.name">
<b-container class="bv-example-row" >
<b-card>
<b-card-text v-for="data1 in pageShowData" :key="data1.domains" :per-page="perSize">
<b-card>
<b-col>University name:{{data1.university_name}}</b-col>
<b-col>Domain:{{data1.domains}}</b-col>
<b-col>State-province:{{data1.state_province}}</b-col>
<b-col><a :href='data1.website_url' @click="redirect(data1.website_url)">website_url:--{{ data1.website_url }}</a></b-col>
</b-card>
</b-card-text>
</b-card>
</b-container>
</div>
</draggable>
 
</div>
</div>
<div class="col-md-5">
<div class="p-2 alert alert-success">
<h3>files</h3>
<draggable
class="list-group kanban-column" :list="arrTested" group="tasks">
<div class="list-group-item" v-for="element in arrTested" :key="element.name"></div>
</draggable>
</div>
</div>
</div>
</b-container>
</div>
</template>
<script>
import axios from "axios";
import draggable from "vuedraggable";
const { getNames } = require("country-list");
export default {
name:'QuE2',
components:{
draggable
},
data() {
return {
pageSize:5,
currentPage:1,
items:" ",
countries: [],
}
},
watch: {
currentPage(newValue, oldValue) {
console.log("newValue",newValue);
console.log("oldValue",oldValue);
this.pagedata(newValue);
}
},
methods:{
async pagedata(page){
this.pageShowData=[];
this.pageShowData=this.items.slice(((page-1)*this.pageSize),(page*this.pageSize));
},
redirect(value) {
window.open(value, "_blank");
},
async fun() {
const response = await axios.get("http://universities.hipolabs.com/search?country=" + this.value, {
method: "GET",
});
const responseText = await response.data;
this.items = responseText.map((row) => {
return { 
    university_name: row.name, 
    domains: row.domains, 
    website_url: row.web_pages[0], 
    state_province: row["state-province"] 
    };
});
this.pagedata(1);
},
},
mounted() {
let countries = getNames();
this.countries = countries.map((row) =>
{
return { value: row, text: row };
});
if (this.countries.length) this.value = this.countries[0].text;
},
computed: {
rows() {
return this.items.length
}
},
created() {
this.getData();
},
}

</script>