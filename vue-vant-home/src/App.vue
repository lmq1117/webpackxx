<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <van-button type="danger" @click="haha">点我</van-button>

    <van-button type="primary" text="组件调用" @click="showNotify" />
    <van-notify v-model="show" type="success">
      <van-icon name="bell" style="margin-right: 4px" />
      <span>通知内容</span>
    </van-notify>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import EXIF from 'exif-js'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showNotify() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
    haha(){
      EXIF.getData()
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
