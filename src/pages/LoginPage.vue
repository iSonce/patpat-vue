<template>
  <div class="LoginPage">
    <h1 id="logo">PatPat</h1>
    <input type="text" id="username" />
    <input type="password" id="password" />
    <button id="loginbtn">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: "Login",
      name: "",
      describe: "",
    };
  }
};
</script>

<style>
.LoginPage {
  margin-top: 50px;
}

.LoginPage #logo {
  color: rgb(180, 34, 43);
}
</style>