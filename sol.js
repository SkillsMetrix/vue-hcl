Vue.component('hello',{
    template :'<h3>template data </h3>'
})
var mydata= new Vue({
    el:'#app',
    data:{
      title:'demo title'
    },

    beforeCreate() {
       alert('before created')
    },
    created() {
        alert('created')
    },
    beforeMount() {
        alert('before mount')
    },
    mounted() {
        alert('mounted')
    },
    beforeUpdate() {
        console.log('before update');
    },
    updated() {
        console.log('record updated');
    },
    beforeDestroy() {
        alert('before destroy')
    },
    destroyed() {
        alert('destroyed')
    },
    methods: {
        destroy(){
            this.$destroy()
        }
    },
})


 -----

   






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="vue.js"></script>
</head>
<body>

    <div id="app">

        <h1>{{title}}</h1>
        <button @click="title='new title'">change</button>
      <hello></hello>
      <hello></hello>
      <hello></hello>
      <hello></hello>
      <button @click="destroy">Destroy</button>
    </div>


    <script src="app.js"></script>
    
</body>
</html>
