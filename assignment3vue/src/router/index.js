import Vue from "vue"
import Router from "vue-router"
import TablE from '../components/TableVue'
import LoGin from '../components/LoginForm'
import SixthQsn from '../components/SixthQsn'
import Btable from '../components/BTAble'
import Bform from '../components/BForm'
import FifthQsn from '../components/FifthQsn5'
import SixthQsn5 from '../components/SixthQsn5'
 import FetchinG from '../components/FetchingData'
 import FetchinGB from '../components/FetchingBCard'
 import SixthDyn from '../components/SixthQsnDyn.vue'
// import FourthQuestion from '../components/FourthQsn5'
Vue.use(Router)
const routes=[
    {path:"/table",name:"table",component:TablE},
{path:"/login",name:"login",component:LoGin},
{
    path:"/six",name:"six",component:SixthQsn
},
{
    path:"/btable",name:"table",component:Btable
},
{
    path:"/bform",name:"Bform",component:Bform
},
{
    path:"/fifth",name:"fifth",component:FifthQsn
},
{
    path:"/sixth",name:"sixth",component:SixthQsn5
},
{
    path:"/fetching",name:"Fetching",component:FetchinG
},
{
    path:"/fetch",name:"FetchingBcard",component:FetchinGB
},
{
    path:"/country",name:"Country",component:SixthDyn
}
]
let router=new Router({routes})
export default router