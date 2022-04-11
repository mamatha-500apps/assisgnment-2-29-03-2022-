<template>
    <div>
        <h1>ArraYs</h1>
        <button @click="arr()">Click Me</button>
    </div>
</template>
<script>
export default {
    name:"ArrayName",
    data(){
       

    },
    methods:
    {
        arr(){
        var a=["Hi","Hello","Welcome"]
        var txt=""
        for (var i=0;i<a.length;i++)
        {
            txt+=a[i]+"</br>";
        }
        document.write(txt);
    }
    }

}
</script>
