<template>
  <div>
    <h1>ES6 Filter method</h1>
    <button @click="f()">Filter</button>
    <button @click="f1()">ForEach</button>
    <button @click="f2()">Map</button>
  </div>
</template>
<script>
export default {
  name: "MethoD2",
  data() {
    return {
      students: [
        { name: "Anu", age: 22 },
        { name: "radha", age: 24 },
        { name: "anusha", age: 20 },
        { name: "Navya", age: 25 },
        { name: "sruthi", age: 21 },
      ],
      array: [4, 7, 6, 9, 6, 3],
    };
  },
  methods: {
    f() {
      var studentnames = this.students.filter((student) => {
        return student.name != "Anu";
      });

   console.log(studentnames);
    },
    f1() {
      this.array.forEach((arrayItems, index) => {
        console.log(arrayItems, index);
      });
    },
    f2() {
      this.array.map((arrayItems, index) => {
        if (index != 2) return 0;
        console.log(arrayItems, index);
      });
    },
  },
};
</script>





