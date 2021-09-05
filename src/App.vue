

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="app">123</div>
</template>

<script>
import MyTestableClass from './utils/testClass';
export default {
  data() {
    return {}
  },
  created() {
    console.log(MyTestableClass.aaa);
  },
  methods: {
    testCCC() {

    }
  }
}
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
