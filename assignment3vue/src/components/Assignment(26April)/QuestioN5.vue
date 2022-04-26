<template>
    <div>
        <b-form-input  v-model="value" placeholder="enter country name"  v-on:keyup="fun()" required  ></b-form-input>
      <b-card>
        <b-card-text v-for="text in posts" :key="text.id">
          <b-card
            ><b-row>
              <b-col>University Name:{{ text.name }}</b-col> </b-row><br />
            <b-row>
              <b-col>Domain Name:{{ text.domains }}</b-col>
              <b-col @click="redirect(text.web_pages)">Website Name:{{ text.web_pages }}</b-col>
              <a :href="text.Web-pages">website_url:{{ text.web_pages}}</a>
            </b-row>
            </b-card >
        </b-card-text>
      </b-card>
    </div>
</template>
<script>
export default {
   name:"QuestioN5",
   data(){
       return{
  posts: " ",
      fields: ["name", "domains", "state-province", "web-pages"],
       }
   },
   methods:{
        redirect(data1) {
      window.open(data1, "_blank");
    },
     async fun() {
      try {
        let response = await fetch(
          "http://universities.hipolabs.com/search?country=" + this.value
        );
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
},
created() {
    this.fun();
  },
   }
</script>
