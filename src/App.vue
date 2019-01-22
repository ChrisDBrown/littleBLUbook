<template>
  <div id="app">
    <el-container>
      <el-header><h1>Little BLU Book</h1></el-header>
      <el-main><spells></spells></el-main>
    </el-container>
  </div>
</template>

<script>
import Spells from './components/Spells.vue'

export default {
  name: 'app',
  components: {
    Spells
  }
}
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
