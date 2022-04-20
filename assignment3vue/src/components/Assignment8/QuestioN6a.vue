<template>
    <div>
      <p>  {{name}} </p>
       <p> {{contact}} </p>
        <p>using refs</p>
        </div>
</template>
<script>
export default {
  name:"ChilD",
  data(){
      return{

      }
  },
  props:{
       name:String,
       contact:Number,   
   },
  methods:{
      fun(){
          document.write("using refs")
      }
  },

}
</script>
