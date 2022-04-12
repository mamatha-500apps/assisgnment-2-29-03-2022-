<template>
  <div>
    <b-form-input
      v-model="value"
      placeholder="enter country name"
      required
    ></b-form-input>
    <button @click="getData()">click button</button>
    <b-container class="bv-example-row">
      <b-card>
        <b-card-text v-for="data1 in posts" :key="data1.id">
          <b-card
            ><b-row>
              <b-col>University Name:{{ data1.name }}</b-col> </b-row
            ><br />
            <b-row>
              <b-col>Domain Name:{{ data1.domains }}</b-col>
              <b-col>Website Name:{{ data1.web_pages }}</b-col>
            </b-row></b-card >
        </b-card-text>
      </b-card>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "QueS5",
  data() {
    return {
      posts: " ",
      fields: ["name", "domains", "state-province", "web-pages"],
    };
  },
  methods: {
    async getData() {
      try {
        let response = await fetch(
          "http://universities.hipolabs.com/search?country=" + this.value
        );
        this.posts = await response.json();
        //this.value=this.posts;
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







