<template>
  <div id="app">
    <ul>
      <p v-for="data in users" :key="data.id">
     name:     {{ data.name }} <br>
     email:   {{ data.email }} <br>
       id:  {{ data._id }}
      </p>
    </ul>
  </div>
</template>
<script>
import Data from '@/components/Assignment8/code.json'
export default {
  name: "QuestioN4",
  data() {
    return {
      users: Data,
    };
  },
};
</script>