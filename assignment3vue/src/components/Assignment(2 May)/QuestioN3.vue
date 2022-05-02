<template>
    <div>
        <button @click="fun()">click Here
            </button>
    </div>
</template>
<script>
export default 
{
name:"QuestioN3",
data(){
    return{
a:[1,1,2,2,2,3,4,3,2]
    }
},
methods:{
fun(){
  let  unique=this.a.filter((item,index,array)=>array.indexOf(item)===index);
document.write(unique); 
}
}

}
</script>
