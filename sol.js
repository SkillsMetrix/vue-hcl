<template>
  <div>
    <p>User Registration</p>
    UserName:<input placeholder="Enter UserName" v-model="user.uname" />
    <br />
    Email:<input type="email" placeholder="Enter Email" v-model="user.email" />
    <br />
    <button @click="addUser">Add User</button>
  </div>
</template>
  <script>
    export default {
      data() {
        return {
          user: {
            uname: "",
            email: "",
          },
        };
      },
      methods: {
        addUser() {
          console.log(this.user);
        },
      },
    };
  </script>

