<template>
  <div>
    Search:<input
      type="text"
      placeholder="Search city here"
      v-model="inputCity"
    />
    <button @click="searchCity">Load</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputCity: "",
    };
  },
  methods: {
    searchCity() {
      this.$emit("search-city", this.inputCity);
    },
  },
};
</script>



----------


  <template>
  <div id="app">
    Welcome

    <Header v-bind:title="title"></Header>
    <Banner></Banner>
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
      apiKey:'b3aaa0b3323c0baab93aff38f75b44cb'
    }
  },
  methods: {
    searchCity(city){
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.apiKey}`)
     //axios.get('https://jsonplaceholder.typicode.com/users')
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
