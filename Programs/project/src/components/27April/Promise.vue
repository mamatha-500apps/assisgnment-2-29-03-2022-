<template>
  <div> 
    <h1>Using Promise</h1>
    <button @click="fun()">clickme</button>
     <b-container class="bv-example-row">
      <b-card>
        <b-card-text v-for="data1 in text" :key="data1.id">
          <b-card ><b-row>
              <b-col>id:{{ data1.id }}</b-col> </b-row >
            <b-row>
              <b-col>Name:{{ data1.name }}</b-col>
            </b-row>
            <b-row>
                <b-col>Email:{{ data1.email }}</b-col>
              </b-row>
              <b-row>
                <b-col>Body:{{data1.body}}</b-col>
              </b-row></b-card>
        </b-card-text>
      </b-card> 
       </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AxiOs",
  data() {
    return {
    text:"",

    };
  },
  methods: {
    fun() {
      let response = axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
       let mypromise = new Promise((myResolve, myReject) => 
       {
       myResolve(response);
       myReject("error");
       });
  JSON.stringify(mypromise.then((response) =>this.text=response.data).catch(function (error)
   {
console.log(error);
  }));
    },
  },
};
</script>

