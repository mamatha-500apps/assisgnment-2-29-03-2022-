<template>
    <div>
         <b-form id="form">
      Enter First Number:<b-form-input id="fnub" class="firstnumber" v-model="num1" placeholder="enter First number"></b-form-input>
      Enter Second Number:<b-form-input id="lnub" class="lastnumber" v-model="num2" placeholder="enter second number">
      </b-form-input>
      <b-button @click="multiply()">Multiply</b-button>
      <b-button @click="Divide()">Divide</b-button>
    </b-form>
   <h1> {{result}}</h1>
    </div>
</template>
<script>
export default{
    name:"QuestioN2",
    data(){
        return{
num1:"",
num2:"",
result:""
        }
    },
    methods:
    {
multiply(){
   this.result=this.num1*this.num2;
   this.num1="",
   this.num2=""
},
Divide(){
   this.result=this.num1/this.num2;
   this.num1="",
   this.num2=""
}
    }
}
</script>
