<template>
  <div>
    <EmitChild @login="fun"></EmitChild>
  </div>
</template> 
<script>
import EmitChild  from './EmitChild.vue'
export default {
  name: "emiT",
  components: { 
      EmitChild 
  },
  methods:
   {
    fun()
    {
      document.write("sample check emit");
    },
  },
};
</script>

