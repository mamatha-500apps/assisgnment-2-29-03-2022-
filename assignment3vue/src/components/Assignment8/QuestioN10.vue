<template>
    <div>
        <button @click=myfun()>Click</button>
        </div>
</template>
<script>
export default {
    name:"QuestioN10",
    data(){
        return{
        }
    },
    methods:
    {
    myfun(){
        try
        {     
        this.count = this.count * 5;
        console.log("printing count",this.count);
        }
        catch(error){
           document.write(error.message);
        }
    }
    }
}
</script>
