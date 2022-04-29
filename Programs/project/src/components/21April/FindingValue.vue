<template>
    <div>
        <button @click="fun()">click</button>
        <p>{{Search}}</p>
    </div>
</template>
<script>
export default {
    name:"FindinG",
    data(){
return{
    a:[{name:"Mamatha",contact:9573423401,Address:"Wgl"},
    {name:"Vennela",contact:9573423402,Address:"Hnk"},
    {name:"Akhila",contact:9573423403,Address:"Hyd"},
    ],
    Search:" "
}
    },
    methods:{
fun()
{
this.Search= this.a.find( element => { return element.name=='Mamatha'});

}
}
}
</script>
