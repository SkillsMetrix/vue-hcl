<template>
  <div>
    <div id="on" @click="switched(true)"
    :class="{active:value}"
    ></div>

    <div id="off"  @click="switched(false)"
    :class="{active:value}"
    ></div>
  </div>
</template>

<script>
export default {
    props:['value'],
    methods: {
        switched(isOn) {
            this.$emit('input',isOn)
        }
    },
}

</script>

<style scoped>

#on,#off {
    width: 40px;
    height: 20px;
    background-color: lightblue;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
}
#on:hover,#on.active{
    background-color: lightgreen;
}
#off:hover,#off.active{
    background-color: lightcoral;
}

</style>
