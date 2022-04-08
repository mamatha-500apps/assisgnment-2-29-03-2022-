<template>
<div>
{{ info }}
</div>
</template>
<script>
var axios = require("axios").default;
export default {
name: "FifTH",
data() {
return {
info: " ",
};
},
mounted() {
axios
.get("http://universities.hipolabs.com/search?country=${CountryName}")
.then((response) => (this.info = response));
},
};
</script>