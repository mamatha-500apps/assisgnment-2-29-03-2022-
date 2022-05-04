
 <template>
    <div>
        <button @click="fun()">click here</button>
    </div>
</template>
<script>
export default
{
    name:"QuestioN8",
    data(){
        return{
     color : ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],
 o :["th","st","nd","rd"],
 x:""
     }
    },
    methods:{
fun(){
for (let i = 1; i <=this.color.length; i++){
  if ( i < 4) {this.x = i}
  else {this.x = 0}
  document.write(`${i}${this.o[this.x]} choice is ${this.color[i-1]}`+"</br>")
}
  }
}
}
</script>
