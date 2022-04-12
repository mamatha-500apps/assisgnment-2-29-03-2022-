<template>
    <div>
        <h1>ThirdQsn</h1>
        <button @click="fun()">ClickHere</button>
    </div>
</template>
<script>


export default {
    name:"ThirdQsn",
    data(){
        return{
 array:[
{"category1": [{ "name": "cat1", 
"description": "it is cat1", 
"details": ["name", "category", "age", "contact"]
}]
}
,{"category2": 
[{ "name": "cat2", 
"description": "it is cat2", 
"details": ["name2", "category2", "age2", "contact2"]
}]
}
]
        }
    },
    methods:{
fun()
{
document.write(this.array[0].category1[0].details+"</br>"+this.array[1].category2[0].details)
}

    }
}
</script>
