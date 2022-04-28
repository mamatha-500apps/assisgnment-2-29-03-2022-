<template>
  <div>
    <h1 align="center">This is Question 1</h1>
    <b-form-select v-model="value" :options="countries"> </b-form-select
    ><br /><br />
    <b-button variant="warning"   @click="fun">Get Data</b-button><br /><br />
    <center>
      <b-col lg="6" class="my-1">
          <b-input-group size="sm">
            <b-form-input   id="filter-input"  v-model="filter" type="search" placeholder="Type to Search"  >  </b-form-input>
            <b-input-group-append><b-button :disabled="!filter" @click="filter = ''"  >Clear</b-button>
            </b-input-group-append>
          </b-input-group>
      </b-col>
          <b-form-checkbox-group   v-model="filterOn"   :aria-describedby="ariaDescribedby"  class="mt-1">
            <b-form-checkbox value="university_name">university_name</b-form-checkbox>
            <b-form-checkbox value="domains">domains</b-form-checkbox>
            <b-form-checkbox value="website_url">website_url</b-form-checkbox>
            <b-form-checkbox value="isActive">state_province</b-form-checkbox>
          </b-form-checkbox-group>
      <b-container>     
          <b-table id="mytable" :items="items"  fields="fields"  :filter="filter" :filter-included-fields="filterOn"  @filtered="onFiltered">
          </b-table>
      </b-container>
    </center>
    
  </div>
</template>
<script>
const { getNames } = require("country-list");
import axios from "axios";
export default {
  name: "QuE1",
  data() {
    return {
      items: [],
      fields: [],
      value: "",
      countries: [],
      filter: null,
      filterOn: [],
    };
  },
  computed: {
    sortOptions() {
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
    if (this.countries.length) this.value = this.countries[0].text;
    window.onscroll = function() {myFunction()};
var header = document.getElementById("filter-input");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
  },
  methods: {  
    redirect(value) {
      window.open(value, "_blank");
    },
    async fun() {
      const response = await axios.get(
        "http://universities.hipolabs.com/search?country=" + this.value
      );
      const responseText = await response.data;
      this.items = responseText.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,
          website_url: row.web_pages[0],
          state_province: row["state-province"],
        };
      });
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>