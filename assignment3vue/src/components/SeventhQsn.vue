<template>

<div id="sample">
    <p>Seventh Question</p>
<b-container>

<div>

<b-dropdown id="sample1" text="Status" class="m-md-2">

<b-dropdown-item @click="open()">Open</b-dropdown-item>

{{opendata}}

<b-dropdown-item @click="closed()">Closed</b-dropdown-item>

{{closeddata}}

<b-dropdown-item @click="pending()">Pending</b-dropdown-item>

{{pendingdata1}} <br> {{pendingdata2}}

</b-dropdown>

</div>

</b-container>

<p>{{result}}</p>

</div>

</template>


<script>

export default {

name:"QuesT7",

data(){

return{

users:[{email:"Eliseo@gardner.biz" , id:"1" , name:"id labore ex at quam laborum" , status:"open"},

{email: "Jayne_Kuhic@sydney.com",id:"2",name: "quovero reiciendis velit similiqueearum",status:"pending"},

{email: "Nikita@garfield.biz",id:"3",name:"odioadipisci rerum autanimi",status:"closed"},

{email: "Lew@alysha.tv",id:"4",name: "alias odio sit",status:"pending"},],

result:"",

opendata:"",

closeddata:"",

pendingdata1:"",

pendingdata2:"",

}

},

methods:{

open() {

this.opendata = this.users[0];

},

pending(){

this.pendingdata1 = this.users[1];

this.pendingdata2 = this.users[3];

},

closed(){

this.closeddata = this.users[2]

},

}

}


</script>

