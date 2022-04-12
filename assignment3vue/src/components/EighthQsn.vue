<template>
    <div>
        <p>Eighth Question</p>
        <p  @click="myfun()">Hello</p>
   <textarea id="sample"> </textarea>
    </div>
</template>
<script>
export default{
    name:"EighthQsn",
    data(){
        return{
text: ""
        }
    },
    methods:{
          myfun()
        {
           this.text = document.write(" " + document.getElementById("sample").value);
        }
    }
}
</script>