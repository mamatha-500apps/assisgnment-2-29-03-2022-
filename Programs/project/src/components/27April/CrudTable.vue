<template>
   <div>
       <h3>Permissions</h3>
       <TablE
               endpoint="/permissions"
               :columns="['firstname','lastname','action']"
               :form-fields="{
               name: ''
           }">             
           <template v-slot:input-fields="{formdata}">
               <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                   <b-form-input
                           id="input-2"
                           v-model="formdata.firstname"
                           required
                           placeholder="Enter  firstname"
                   ></b-form-input>
                   <b-form-input
                           id="input-2"
                           v-model="formdata.lastname"
                           required
                           placeholder="Enter last name"></b-form-input>
               </b-form-group>
           </template>
       </TablE>
   </div>
</template>
<script>
   import TablE from './TablE.vue';
   export default {
       components: {TablE},
   };
</script>

<style scoped>

</style>