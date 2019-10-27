<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
.content {
  margin: auto;
  width: 30%;
  background-color: #fdfdfd;
  padding: 45px;
}
.disable-content {
  pointer-events: none;
  opacity: 0.4;
}
.footer {
  margin: auto;
  width: 30%;
  background-color: #9c27b0;
  padding: 45px;
}
.login-footer {
  margin: auto;
  width: 30%;
  background-color: #f3f3f3;
  padding: 45px;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  border: 1px solid black;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 5px;
  margin: 10px 0;
}
.dob,
.gender {
  display: block;
  margin: 10px 0;
}
.select-css {
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  box-sizing: border-box;
  margin: 10px 10px 10px 0px;
  border: 1px solid black;
  border-radius: 0.5em;
  -moz-appearance: menulist;
  -webkit-appearance: menulist;
  background-color: #fff;
}
.container {
  position: relative;
  padding: 5px 5px 0px 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}
.container:hover input ~ .checkmark {
  background-color: #ccc;
}
.container input:checked ~ .checkmark {
  background-color: white;
  border: 1px solid black;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  top: 5px;
  left: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: black;
}
.btn-block {
  display: block;
  width: 100%;
  border: none;
  background-color: #9c27b0;
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
.btn-block:hover {
  background-color: #ddd;
  color: black;
}
</style>
