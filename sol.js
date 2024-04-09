var vm1 = new Vue({
  //el: "#app1",
  data: {
    title: "The Vue Instance",
    showPara: false,
  },
  methods: {
    show: function () {
      this.showPara = true;
      this.updateTitle("The new Instance (updated)");
      this.$refs.mbt.innerText='Test'
    },
    updateTitle: function (title) {
      this.title = title;
    },
  },
  computed: {
    lowerCaseTitle: function () {
      return this.title.toLowerCase();
    },
  },
  watch: {
    title: function (value) {
      alert("Title changed....!  " + value);
      vm1.$refs.heading.innerText='something else'
    },
  },
});

//mounting it

vm1.$mount('#app1')


// changed by window fun
setTimeout(() => {
  vm1.title = "changed by timer";
}, 3000);
// another instance

var vm2 = new Vue({
  el: "#app2",
  data: {
    title: "The another Vue Instance",
  },
  methods: {
    onChange() {
      vm1.title = "changed by vm2";
    },
  },
});



-----------


  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="vue.js"></script>
</head>

<body>

    <div id="app1">
        <h1>{{title}}</h1>
        <h3 ref="heading">Dummy value</h3>
        <h2>{{lowerCaseTitle}}</h2>
        <button @click="show" ref="mbt">Show Para</button>
        <p v-if="showPara">This is not always visible</p>
    </div>
    <hr>

    <div id="app2">
        <h1>{{title}}</h1>
        <button @click="onChange">Change VM2</button>
    </div>
    <script src="app.js"></script>


</body>

</html>
