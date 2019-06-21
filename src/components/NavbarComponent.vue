<template>
  <div class="container">
    <b-navbar class="flex-navbar" toggleable="lg">
      <b-navbar-brand href="#">Korn Jiradej</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="nav navbar-nav navbar-right" right>
            <b-nav-item href="#">HOME</b-nav-item>
            <b-nav-item href="#">SKILL</b-nav-item>
            <b-nav-item href="#">EXPERIENCE</b-nav-item>
            <b-nav-item href="#">HISTORY</b-nav-item>
            <b-nav-item href="#">MY PROJECT</b-nav-item>
            <b-nav-item href="#">CONTACT</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      massage: "Hello vue!"
    };
  }
};
</script>

<style>
.text-header {
  text-align: center;
}
.flex-navbar {
  top: 0;
  z-index: 20;
  background-color: transparent;
  position: fixed;
  width: 1170px;
}
.navbar-light .navbar-brand {
  color: white !important;
}
.navbar-nav .nav-link {
  color: white !important;
}
.item-nav {
  font-size: 20px;
  font-family: "Roboto", sans-serif;
}
@media only screen and (max-width: 768px) {
  .flex-navbar {
    width: 353px !important;
  }
}
</style>
