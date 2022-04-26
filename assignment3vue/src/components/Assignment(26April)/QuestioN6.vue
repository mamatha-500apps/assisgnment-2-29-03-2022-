<template>
  <div>
    <b-form-select v-model="value" :options="countries"></b-form-select>
    <b-button variant="primary" @click="getData">Get Data</b-button>
    <b-card v-for="value in items" :key="value.domains" class="mb-2">
      <b-card-text>university_name:-- {{ value.university_name }} </b-card-text>
      <p>domains:--{{ value.domains }}</p>
      <p @click="redirect(value.website_url)">
        website_url:--{{ value.website_url }}
      </p>
      <p>state_province:--{{ value.state_province }}</p>
    </b-card>
  </div>
</template>
<script>
const { getNames } = require("country-list");
export default {
  name: "QueS6",
  data() {
    return {
      value: "",
      items: [],
      countries: [],
    };
  },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
    if (this.countries.length) this.value = this.countries[0].text;
  },
  methods: {
    redirect(value) {
      window.open(value, "_blank");
    },
    async getData() {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=" + this.value,
        {
          method: "GET",
        }
      );
      const responseText = await response.json();
      this.items = responseText.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,
          website_url: row.web_pages[0],
          state_province: row["state-province"],
        };
      });
    },
  },
};
</script>
<style scoped></style>

