<template>
  <div>
    <div class="loader-con" style="display:none;">
      <div class="spinner center">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
    <header nav-wrapper effect>
      <navbar-component></navbar-component>
    </header>
    <section
      id="home"
      class="home-1 parallax one-page-section"
      style="background-position: 50% 0px;"
    >
      <div class="page-table">
        <div class="table-cell text-center">
          <div class="avatar-hero">
            <b-img src="./assets/korn1.jpg" alt="avatar-hero"></b-img>
          </div>
          <h2 class="text-home">Hi I'm Korn Jiradej</h2>
          <h2 class="typer-title" style="color: white;">Let's get to know each other</h2>
          <a href="#about" class="scroll home-s-btn hor-center">
            <span class="dot center"></span>
          </a>
        </div>
      </div>
    </section>
    <section id="abount">
      <div class="container container-skill">
        <div class="row row-skill">
          <b-row>
            <b-col>
              <div class="about-contact">
                <h2>Hi There! I'm Korn Jiradej</h2>
                <!-- message -->
                <p>{{message_skill_left}}</p>
              </div>
              </b-col>
            <!-- <div class="w-100"></div> -->
            <b-col>
              <div class="about-contact">
                <h2>Hi There! I'm Korn Jiradej</h2>
                <p>
                    {{message_skill_right}}
                </p>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </section>
    <section id="work"></section>
    <section id="contact"></section>
    <div id="app">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    NavbarComponent
  },
  data(){
    return{
      message_skill_left:"I am a professional web designer from Manchester, England. I create beautiful professional websites using best practice accessibility. I enjoy turning complex problems into simple, beautiful and intuitive interface designs. I am a professional web designer from Manchester, England. I create beautiful professional websites using best practice accessibility. I enjoy turning complex problems into simple, beautiful and intuitive interface designs.",
      message_skill_right:"I am a professional web designer from Manchester, England. I create beautiful professional websites using best practice accessibility. I enjoy turning complex problems into simple, beautiful and intuitive interface designs. I am a professional web designer from Manchester, England. I create beautiful professional websites using best practice accessibility. I enjoy turning complex problems into simple, beautiful and intuitive interface designs."
    }
  }
};
</script>
