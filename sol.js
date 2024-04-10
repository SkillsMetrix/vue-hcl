<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      status: "Normal Working",
    };
  },
  methods: {
    changeStatus() {
      this.status = "Better";
    },
  },
};
</script>
