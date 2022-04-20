<template>
    <div>
<button @click=myfun(2)>Normal Function</button>
<br>
<button @click=arr(5)>Using Arrow Function</button>
    </div>
</template>
<script>
export default {
   name:"QuestioN7",
   data(){
       return{

       }
   },
   methods:{
  myfun(a){
            if(a%2==0)
            {
                console.log("Even Number")
            }
            else
            {
                console.log("Odd Number")
            }
        },
    arr:(a)=>{if(a%2==0)
            console.log("Even Number");
            else
            console.log("Odd Number");
        }
   }
}
</script>
