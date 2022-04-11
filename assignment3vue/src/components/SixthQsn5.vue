<template>
<div>
<b-dropdown id="dropdown-1" text="Country" class="m-md-2">
<b-dropdown-item @click="getData()">India</b-dropdown-item>
<b-dropdown-item @click="getData1()">Canada</b-dropdown-item>
<b-dropdown-item @click="US()">United States</b-dropdown-item>

</b-dropdown>
{{ posts }}
</div>
</template>
<script>
export default {
name: "QuestioN6",
 data(){
        return{
    posts: " ",
        }
    },
    methods:{
   async getData() {
try {
let response = await fetch(
"http://universities.hipolabs.com/search?country=India"
);
this.posts = await response.json();
} catch (error) {
console.log(error);
}
},
async getData1() {
try {
let response = await fetch(
"http://universities.hipolabs.com/search?country=Canada"
);
this.posts = await response.json();
} catch (error) {
console.log(error);
}
},
async US() {
try {
let response = await fetch(
"http://universities.hipolabs.com/search?country=United States"
);
this.posts = await response.json();
} catch (error) {
console.log(error);
}
},
created(){
    this.getData();
    this.getData1();
    this.US();
}
}
}

</script>