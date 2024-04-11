<template>
  <div>
    <p>Server details are currently not updated</p>
  </div>
    </template>
    
    <script>
     
   
    </script>


----




  <template>
  <div>
    <ul>
      <li v-for="index in 5">Server # {{ index }}</li>
    </ul>
  </div>
</template>
<script>
</script>


-----------

  <template>
<h3>Server Status</h3>
</template>

<script>
 
  
</script>

----------

  <template>
    <h3>All Servers are managed here</h3>
    </template>
    
    <script>
     
      
    </script>


-------------

  <template>
 <div>
  <app-header></app-header>
  <hr>
  <div>
    <servers></servers>
    <app-server-details></app-server-details>
  </div>
  <hr>
  <app-footer></app-footer>
 </div>
</template>

<script>
 import Header from './components/shared/Header.vue'
 import Footer from './components/shared/Footer.vue'
 import Servers from './components/server/Servers.vue'
 import ServerDetails from './components/server/ServerDetails.vue'

 export default {
  components: {
    appHeader: Header,
    Servers,
    'app-server-details':ServerDetails,
    'app-footer':Footer
  }
 }
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
