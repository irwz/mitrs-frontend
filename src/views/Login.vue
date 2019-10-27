<template>
  <div>
    <div class="content">
      <h1>Login</h1>
      <form @submit.prevent="onSubmit">
        <input type="email" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <button class="btn-block">Login</button>
      </form>
    </div>
    <div class="footer">
      &nbsp;
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  mounted() {
    //
  },
  methods: {
    onSubmit() {
      let data = {
        email: this.email,
        password: this.password
      };
      axios.post("http://localhost:7000/login", data).then(response => {
        localStorage.setItem("token", JSON.stringify(response.data));
        this.$router.push("/");
      });
    }
  }
};
</script>
