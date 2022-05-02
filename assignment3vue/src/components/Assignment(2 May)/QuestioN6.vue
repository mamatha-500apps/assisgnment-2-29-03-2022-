<template>
    <div>
        <button @click="fun()">click Here</button>
    </div>
</template>
<script>
export default {
  name:"QuestioN6",
  data(){
      return{
           arr1:[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3],
            a : 1,
 m : 0,
 item:"",
      }
  },
  methods:{
      fun(){
          for (var i=0; i<this.arr1.length; i++)
            {
        for (var j=i; j<this.arr1.length; j++)
                {
                if (this.arr1[i] == this.arr1[j])
              this.m++;
                if (this.a<this.m)
                {
                  this.a=this.m; 
                 this.item = this.arr1[i];
                }
        }
       this. m=0;
}
document.write(this.item+" ( " +this.a +" times ) ") ;  
      }
  }
}
</script>
