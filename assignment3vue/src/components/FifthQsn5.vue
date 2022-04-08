<template>
<div>
    <h1>FifthQsn</h1>
<b-table striped hover :items="posts" :fields="fields"> </b-table>
{{ posts }}
</div>
</template>
<script>
export default {
name: "queS4",
data() {
return {
posts: " ",
};
},
methods: {
async getData() {
try {
let response = await fetch(
"http://universities.hipolabs.com/search?country"
);
this.posts = await response.json();
} catch (error) {
console.log(error);
}
},
},
created() {
this.getData();
},
};

</script>




