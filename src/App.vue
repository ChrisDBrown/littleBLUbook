<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>Little BLU Book</h1>
      </el-header>

      <el-main>
        <spells></spells>
      </el-main>

      <el-footer
        height="100px">
        <br>
        Created by <a href="https://www.twitter.com/chrisdeebrown">ChrisDeeBrown</a> aka <a href="https://eu.finalfantasyxiv.com/lodestone/character/6446107/">Imriel Lumair</a>, Sargatanas<br>
        FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
      </el-footer>
    </el-container>

    <el-dialog :title="mapTitle" :visible.sync="showMapBox" width="90%">
      <div v-if="mapBoxInfo">
        <Map :mapName="$store.state.mapBoxInfo.mapName" :xValue="$store.state.mapBoxInfo.xValue" :yValue="$store.state.mapBoxInfo.yValue" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Spells from './components/Spells.vue'
import Map from './components/Map.vue'

export default {
  name: 'app',
  components: {
    Spells, Map
  },
  computed: {
    mapBoxInfo () {
      return this.$store.state.mapBoxInfo
    },
    mapTitle () {
      if (!this.$store.state.mapBoxInfo) {
        return 'Map'
      }

      return this.$store.state.mapBoxInfo.mapName
        + ' (x'
        + this.$store.state.mapBoxInfo.xValue
        + ', y'
        + this.$store.state.mapBoxInfo.yValue
        + ')'
    },
    showMapBox: {
      get () {
        return this.$store.state.showMapBox
      },
      set () {
        this.$store.dispatch('hideMapBox')
      }
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      this.$ga.page('/')
    })
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
}

@media only screen and (max-width: 600px) {
  section .el-main {
    padding: 20px 0 20px 0;
  }
}
</style>
