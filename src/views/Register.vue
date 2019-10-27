<template>
  <div>
    <div class="content" v-bind:class="{ 'disable-content': showLoginButton }">
      <h1>Registration</h1>
      <form @submit.prevent="onSubmit">
        <input
          type="text"
          placeholder="Mobile number"
          v-model="mobileNumber"
          required
        />
        <input
          type="text"
          placeholder="First name"
          v-model="firstName"
          required
        />
        <input
          type="text"
          placeholder="Last name"
          v-model="lastName"
          required
        />
        <label>Date of Birth</label>
        <div class="dob">
          <select class="select-css" v-model="dob.month">
            <option disabled value="">Month</option>
            <option
              v-for="(month, index) in months"
              :key="index"
              :value="index + 1"
              >{{ month }}</option
            >
          </select>
          <select class="select-css" v-model="dob.day">
            <option disabled value="">Date</option>
            <option v-for="day in days" :key="day" :value="day">{{
              day
            }}</option>
          </select>
          <select class="select-css" v-model="dob.year">
            <option disabled value="">Year</option>
            <option v-for="year in years" :key="year" :value="year">{{
              year
            }}</option>
          </select>
        </div>
        <div class="gender">
          <label class="container"
            >Male
            <input type="radio" v-model="gender" value="male" />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >Female
            <input type="radio" v-model="gender" value="female" />
            <span class="checkmark"></span>
          </label>
        </div>
        <input type="email" placeholder="Email" v-model="email" required />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
        <button class="btn-block">Register</button>
      </form>
    </div>
    <div class="footer" v-bind:class="{ 'login-footer': showLoginButton }">
      <button class="btn-block" v-show="showLoginButton" @click="goToLoginPage">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  computed: {
    months: function() {
      return moment.months();
    },
    years: function() {
      let years = [];
      let currentYear = moment().year();
      for (let i = 1970; i <= currentYear; i++) {
        years.push(i);
      }
      return years;
    }
  },
  watch: {
    "dob.month": function() {
      this.updateDays(this.dob.month);
    },
    "dob.year": function() {
      this.updateDays(this.dob.month, this.dob.year);
    },
    gender: function() {
      console.log(this.gender);
    }
  },
  data() {
    return {
      days: [],
      mobileNumber: "",
      firstName: "",
      lastName: "",
      dob: {
        month: "",
        day: "",
        year: ""
      },
      gender: "male",
      email: "",
      password: "",
      showLoginButton: false
    };
  },
  mounted() {
    //
  },
  methods: {
    updateDays(m, y) {
      this.days = [];
      if (m || y) {
        if (m) {
          let count = moment()
            .month(m - 1)
            .daysInMonth();
          if (y) {
            count = moment()
              .month(m - 1)
              .year(y)
              .daysInMonth();
          }

          for (var i = 1; i < count + 1; i++) {
            this.days.push(i);
          }
        }
      }
    },
    onSubmit() {
      this.showLoginButton = true;
      localStorage.setItem("registered", "yes");
    },
    goToLoginPage() {
      this.$router.push("/login");
    }
  }
};
</script>
