<template>
  <b-container>
    <!-- Content here -->
    <b-container class="bv-example-row">
      <b-img center v-bind="picture2" :src="require('../src/assets/korn.jpg')"></b-img>
      <b-row class="justify-content-md-center">
        
        <b-col cols="12" md="auto">
          <!-- <b-img center  src="./assets/korn.jpg" rounded="circle" alt="Circle image"></b-img> -->
          <!-- <img center src="./assets/logo.png"> -->
          
          <b-img center v-bind="picture1" :src="require('../src/assets/logo.png')" ></b-img>
          <!-- <b-img center src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img> -->
          <router-view/>
        </b-col>
        
      </b-row>

    </b-container>
    
  </b-container>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      picture1:{width: '100%', height: '100%'},
      picture2:{ width: '100%' }
    }
  }
};
</script>

