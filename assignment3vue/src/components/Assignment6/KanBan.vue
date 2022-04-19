<template>
  <div class="overflow-auto">
    <b-form-select
      v-model="value"
      :options="countries"
      :current-page="currentPage"
      :per-page="perPage"
    ></b-form-select>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="pageSize"
      aria-controls="my-table"
    >
    </b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <!--<b-table

id="my-table"

:items="items"

:per-page="perPage"

:current-page="currentPage"

small

></b-table>-->

    <button @click="getData()">Submit</button>

    <!--<b-container class="bv-example-row" >

<b-card>

<b-card-text v-for="data1 in pageShowData" :key=data1.id

:per-page="perPage"

:current-page="currentPage"

small>


</b-container>-->

    <b-container mt="5">
      <div class="row mt=6" id="mytable">
        <div class="col-md-6">
          <div class="p-2 alert alert-secondary">
            <h3>University Name</h3>

            <draggable class="list-group kanban-column" group="tasks">
              <div
                class="list-group-item"
                v-for="value in countries"
                :key="value.name"
              >
                <b-container class="bv-example-row">
                  <b-card>
                    <b-card-text
                      v-for="data1 in pageShowData"
                      :key="data1.id"
                      :per-page="perPage"
                      :current-page="currentPage"
                      small
                    >
                      <b-card>
                        <b-row>
                          <b-col
                            >University name:{{ data1.university_name }}</b-col
                          >
                        </b-row>

                        <div class="w-100"></div>

                        <b-row>
                          <b-col>Domain:{{ data1.domains }}</b-col>

                          <b-col
                            >State-province:{{ data1.state_province }}</b-col
                          >

                          <b-col
                            ><a
                              :href="data1.website_url"
                              @click="redirect(data1.website_url)"
                              >website_url:--{{ data1.website_url }}</a
                            ></b-col
                          >

                          <!--<b-col>Web-pages{{data1.website_url}}</b-col>-->
                        </b-row>
                      </b-card>
                    </b-card-text>
                  </b-card>
                </b-container>
              </div>
            </draggable>
          </div>
        </div>

        <div class="col-md-5">
          <div class="p-2 alert alert-success">
            <h3>files</h3>

            <draggable
              class="list-group kanban-column"
              :list="arrTested"
              group="tasks"
            >
              <div
                class="list-group-item"
                v-for="element in arrTested"
                :key="element.name"
              ></div>
            </draggable>
          </div>
        </div>
      </div>
    </b-container>

    <!--<b-table

id="my-table"

:items="items"

:per-page="perPage"

:current-page="currentPage"

small

></b-table>-->
  </div>
</template>


<script>
import draggable from "vuedraggable";

const { getNames } = require("country-list");

export default {
  name: "QuE2",

  components: {
    draggable,
  },

  data() {
    return {
      pageSize: 5,

      currentPage: 1,

      items: " ",

      countries: [],
    };
  },

  watch: {
    // whenever question changes, this function will run

    currentPage(newValue, oldValue) {
      console.log("newValue", newValue);

      console.log("oldValue", oldValue);

      this.pagedata(newValue);
    },
  },

  methods: {
    async pagedata(page) {
      this.pageShowData = [];

      // this.pageShowData=this.items.slice(((1-1)*3),((1*3)));

      this.pageShowData = this.items.slice(
        (page - 1) * this.pageSize,
        page * this.pageSize
      );
    },

    redirect(value) {
      window.open(value, "_blank");
    },

    async getData() {
      // Get the response

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

      this.pagedata(1);
    },
  },

  /*async getData() {

try {

let response = await fetch(

"http://universities.hipolabs.com/search?country=" + this.value

);

this.items = await response.json();

this.pagedata(1);

//this.value=this.posts;

} catch (error) {

console.log(error);

}

},*/
 mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
    if (this.countries.length) this.value = this.countries[0].text;
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  created() {
    this.getData();
  },
};
</script>