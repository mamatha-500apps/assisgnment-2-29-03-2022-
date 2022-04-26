<template>
    <div>
        <button @click="getData()">click here</button>
       {{posts}}
    </div>
</template>
<script>
export default {
    data(){
        return{
posts:"",
fields:"",
        }
    },
    methods:{
       async getData() {
      try {
        let response = await fetch(
        "‘https://agilecrm.com/sitemap.xml");
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
      }
        }
}
</script>
