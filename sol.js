<template>
  <div class="component">
    <p>User App Component</p>

    <h3>{{ name }} and age is {{ age }}</h3> 

    <button @click="changeName">Change Name</button>

    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <UserDetails :name="name" @namewasreset="name=$event" :userAge="age"></UserDetails>
      </div>

      <div class="col-xs-12 col-sm-6">
        <UserEdit :userAge="age" @agewaschanged="age=$event"></UserEdit>
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
      name:'Admin',
      age:20
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
        UserAge is : {{ userAge }}
        <button @click="editAge">Change Age</button>
    </div>
 
</template>


<script>
import { eventBus } from "../main";
export default {
props :['userAge'],

methods:{
    editAge(){
        this.userAge=40
       // this.$emit('agewaschanged',this.userAge)
       eventBus.$emit('agewaschanged',this.userAge)

    }
}
}
</script>

<style scoped>
div{
    background-color: lightgreen;
}
</style>


---------


  <template>
    <div class="component">
   USer Details
   <p>User Name: {{ switchName() }} and age is : {{ userAge }}</p>
   <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
import { eventBus } from "../main";

export default{
    props:{
       name:{
        type:String
       },
       userAge: Number
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
    created() {
        eventBus.$on('agewaschanged',(age)=>{
            this.userAge=age
        })
    },

}
</script>

<style scoped>
div{
    background-color: lightcoral;
}
</style>


----
