<template><div>
    <h1>Hello</h1>
    <table align="center">

<thead>

<tr>

<th>Name</th>

<th>Email</th>

<th>MobileNo</th>

</tr>

</thead>

<tbody>

<tr v-for="arra in arra" :key="arra.id">

<td>{{arra.name}}</td>

<td>{{arra.Email}}</td>

<td>{{arra.MobileNo}}</td>

</tr>

</tbody>

</table>


</div>
         
</template>
<script>

export default {
    name:'InformatioN',
    data() {

return {

arra: [

{ name:'Mamatha', Email: 'Mamatha@gmail.com', MobileNo: '8466836076' },

{ name:'Vennela', Email: 'vennela@gmail.com', MobileNo: '9652865692' },

{ name:'Anusha', Email: 'anusha@gmail.com', MobileNo: '9550702982' },

]

};

}

};

</script>
<style scoped>

table{

font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

border-collapse: collapse;

width: 50%;

background-color: white;

}

td, th {

border: 5px solid #dddddd;

text-align: left;

padding: 8px;

}
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}

</style>