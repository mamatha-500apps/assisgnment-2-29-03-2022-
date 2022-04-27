<template>
    <div>
  <b-spinner v-for="variant in variants" :variant="variant" :key="variant"  label="Text Centered"></b-spinner><br>
  <span>loading...</span>
 <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="http://localhost:8080/#/promise">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="http://localhost:8080/#/crud">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="http://localhost:8080/#/Fetch">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
        </div>
</template>
<script>

export default {
    data(){
        return{
          variants: ['primary', 'secondary', 'danger']
        }
    },
    methods:
    {
      fun()
      {
        
    setTimeout(function(){
            window.location.href = 'http://localhost:8080/#/Fetch';
         }, 1000);
    }
    }
}
</script>
