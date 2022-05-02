<template>
    <div>
        <button @click="fun()">click here</button>
    </div>
</template>
<script>
export default{
    name:"QuestioN5",
    data(){
        return{
myColor : ["Red", "Green", "White", "Black"]
        }
    },
    methods:{
fun(){
    document.write(this.myColor+"</br>"+this.myColor.join('  ')+"</br>"+this.myColor.join(' + '));
}
    }
}
</script>
