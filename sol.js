var vm1 = new Vue({
  el: "#app1",
  data: {
    title: "The Vue Instance",
    showPara: false,
  },
  methods: {
    show: function () {
      this.showPara = true;
      this.updateTitle("The new Instance (updated)");
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
    },
  },
});
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
