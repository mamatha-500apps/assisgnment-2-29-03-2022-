<template>
<div>
  <h2>Text Input</h2>
  <input v-model="text"> 
  <p> {{text}}</p><br>
  <h2>Checkbox</h2>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">
    Checked: {{ checked }}</label>
  <h2>Multi Checkbox</h2>
  <input type="checkbox" id="jack" value="Java" v-model="checkedNames">
  <label for="jack">Java</label>
  <input type="checkbox" id="john" value="Phython" v-model="checkedNames">
  <label for="john">Phython</label>
  <input type="checkbox" id="mike" value="JavaScript" v-model="checkedNames">
  <label for="mike">JavaScript</label>
  <p>Checked names: <pre>{{ checkedNames }}</pre></p>
  <h2>Radio</h2>
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
  <h2>Select</h2>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
  <h2>Multi Select</h2>
  <select v-model="multiSelected" multiple style="width:100px">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ multiSelected }}</span>
</div>
</template>
<script>
export default {
  data() {
    return {
      text: 'Edit me',
      checked: true,
      checkedNames: ['Languges'],
      picked: 'One',
      selected: 'A',
      multiSelected: ['A']
    }
  }
}
</script>
