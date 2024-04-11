<template>
  <div class="component">
    <p>User App Component</p>

    <h3>{{ name }}</h3>

    <button @click="changeName">Change Name</button>

    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <UserDetails :name="name" @namewasreset="name=$event"></UserDetails>
      </div>

      <div class="col-xs-12 col-sm-6">
        <UserEdit></UserEdit>
      </div>
    </div>
  </div>
</template>

<script>
import UserEdit from "./UserEdit.vue";
import UserDetails from "./UserD.vue";
export default {
  data() {
    return {
      name:'Admin'
    }
  },
  methods: {
    changeName(){
      this.name='Manager'
    }
  },
  components: {
    UserEdit,
    UserDetails,
  },
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>



-----------

  <template>
    <div class="component">
   USer Details
   <p>User Name: {{ switchName() }}</p>
   <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
export default{
    props:{
       name:{
        type:String
       }
    },
    methods: {
        switchName(){
            return this.name.split('').reverse().join('')
        },
        resetName(){
            this.name='Admin'
            this.$emit('namewasreset',this.name)
        }
    },

}
</script>

<style scoped>
div{
    background-color: lightcoral;
}
</style>
