<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h4>下面是一些单页面入口(需手动修改为当前页面ip及端口号)</h4>
    <p>首页 ：http://localhost:1888/index.html</p>
    <p>请假流程页：http://localhost:1888/workForm.html</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
