<template>
  <div id="app">
    <p>Routing Application</p>
     

    <hr>
    <router-view name="header-top"></router-view>
    <router-view></router-view>
    <router-view name="header-bottom"></router-view>
    </div>
    
</template>

<script>
import Header from './Header.vue'
export default {
  components:{
Header
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>


---------


  import User from './components/User.vue'
import Home from './Home.vue'
import UserDetails from './components/UserDetails.vue'
import UserEdit from './components/UserEdit.vue'
import UserStart from './components/UserStart.vue'
import Header from './Header.vue'
 
export const routes=[
    {path:'',name:'home', components:{
        default:Home,
        'header-top':Header
    }},

    {path:'/user',components:{
        default:User,
        'header-bottom':Header
    },children:[
        {path:'',component:UserStart},
        {path:':id',component:UserDetails},
        {path:':id/edit',component:UserEdit,name:'userEdit'}
    ]}
]
