<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>
    <!-- <img src="./assets/logo.png"> -->
    <img src="./assets/korn.jpg">
    <router-view/>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";

export default {
  name: "App",
  components: {
    NavbarComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
