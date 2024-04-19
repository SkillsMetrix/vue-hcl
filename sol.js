<template>
  <div id="app">
    Welcome

    <Header class="header" v-bind:title="title"></Header>
    <Banner class="banner" v-bind:bannerMessage="messageToDisplay" v-bind:bannerType="messageType"></Banner>
    <Search v-on:search-city="searchCity"></Search>
    <Weather></Weather>
    <Footer :fm="footerMessage"></Footer>

    <hr>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Banner from "./components/Banner.vue";
import Search from "./components/Search.vue";
import Weather from "./components/Weather.vue";
import axios from 'axios'

export default {
  components: {
    Header,
    Footer,
    Banner,
    Search,
    Weather,
  },
  data() {
    return {
      title:'Vue Weather App',
      footerMessage:'HCL Tech All rights Reserved @ 2024',
      apiKey:'b3aaa0b3323c0baab93aff38f75b44cb',
      messageType:'Info',
      messageToDisplay:''
    }
  },
  created() {
    if(this.apiKey ===''){
     this.messageType='Error',
     this.messageToDisplay='API Key not found...!'
    }
  },
  
  methods: {
    searchCity(city){
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.apiKey}`)
       .then((response)=> {
        console.log(response.data);
       })

    }
  },
};
</script>

<style>
* {
  box-sizing:border-box;
  padding: 0;
  margin: 0;
}

body {
  background: #f1f3f5;
  font-family: segoe ui,helvetica neue,sans-serif;
  color: #345;
  overflow-x: hidden;
}

/* CSS Grid Styling
*******************/
.header {
  grid-area: header;
}
.banner {
  grid-area: banner;
}
.weather-search {
  grid-area: search;
}
.weather-results {
  grid-area: results;
}
.footer {
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-columns: 10% 35% 35% 10%;
  grid-auto-rows: minmax(20px, auto);
  grid-gap: 10px;
  max-width: 1080px;
  margin: auto;
  grid-template-areas:
    "header   header     header    header"
    "banner   banner     banner    banner"
    "...      search     search    ..."
    "...      results    results   ..."
    "footer   footer     footer    footer";
}
</style>




---------



  <template>
  <div
    v-show="bannerMessage"
    v-bind:style="{ 'background-color': bannerBackgroundColor }"
  >
    <p>{{ bannerMessage }} --{{ bannerType }}</p>
  </div>
</template>

<script>
export default {
  props: {
    bannerMessage: String,
    bannerType: String,
  },
  computed: {
    bannerBackgroundColor() {
      if (this.bannerType === "Error") {
        return "red";
      } else if (this.bannerType === "Success") {
        return "green";
      } else {
        return "blue";
      }
    },
  },
};
</script>

<style scoped>
div {
  width: 100%;
  display: inline-block;
  margin-bottom: 15px;
}
span p {
  padding: 15px;
  color: white;
  width: auto;
}
</style>
