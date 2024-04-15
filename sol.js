<template>
  <div>
    <p>User Registration</p>
    UserName:<input placeholder="Enter UserName" v-model="user.uname" />
    <br />
    Email:<input type="email" placeholder="Enter Email" v-model="user.email" />
    <br />
    <button @click="addUser">Add User</button>

    <hr />
    <div>
      <p>User Details</p>
      <ul>
        <li v-for="u in udata">{{ u.uname }} --{{ u.email }}</li>
      </ul>
      <button @click="loadUsers">Load Users</button>
    </div>
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
      udata: [],
    };
  },
  methods: {
    addUser() {
      this.$http
        .post("http://localhost:4000/adduser", this.user)
        .then((response) => {
          console.log(response);
        });
    },
    loadUsers() {
      this.$http
        .get("http://localhost:4000/loadusers2")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const userArray = [];
          for (let key in data) {
            userArray.push(data[key]);
          }
          this.udata = userArray;
        });
    },
  },
};
</script>
