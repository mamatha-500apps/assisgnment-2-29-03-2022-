<template>
<div>
<h2>Question-4</h2>
<div>
<b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
</div>
<b-button @click="getData()">Click Me!</b-button>
<div>
{{ searchData }}
</div>
</div>
</template>
<script>
var axios = require("axios").default;
export default {
name: "sampleApis",
 data() {
 return {
 options: {
 method: "GET",
 url: "https://json-generator.com/api/json/get/bSldINskRK",
headers: {


 data: { search: "" },
 },
text: "",
searchData: {},
},
 }
 },
methods: {
 async getData() {
 //this.options.data.search = this.text;
 this.searchData = await axios.get("https://json-generator.com/api/json/get/bSldINskRK");
},
},
};
</script>
