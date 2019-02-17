<template>
  <div>
    <li v-if="location.type == 'Default'">
      Acquired by default when BLU is unlocked
    </li>

    <li v-if="location.type == 'Dungeon'">
      {{ location.enemy }} (level {{ location.level }}) in the Dungeon "{{ location.name }}"
    </li>

    <li v-if="location.type == 'FATE'">
      {{ location.enemy }} (level {{ location.level }}) in the FATE "{{ location.name }}" in {{ location.area }} (x{{ location.coordinates.x }}, y{{ location.coordinates.y }}) <el-button icon="el-icon-search" circle @click="showMap(location)"></el-button>
    </li>

    <li v-if="location.type == 'Hunt Mark'">
      Hunt Mark {{ location.enemy }} (level {{ location.level }}) in {{ location.area }}
    </li>

    <li v-if="location.type == 'Levequest'">
      {{ location.enemy }} (level {{ location.level }}) in the Levequest "{{ location.name }}" in {{ location.area }} (x{{ location.coordinates.x }}, y{{ location.coordinates.y }}) <el-button icon="el-icon-search" circle @click="showMap(location)"></el-button>
    </li>

    <li v-if="location.type == 'Masked Carnivale Enemy'">
      {{ location.enemy }} in Masked Carnivale stage {{ location.stage }}, "{{ location.name }}"
    </li>

    <li v-if="location.type == 'Masked Carnivale Stages'">
      Clear stage {{ location.stage }} of the Masked Carnivale
    </li>

    <li v-if="location.type == 'Open World'">
      {{ location.enemy }} (level {{ location.level }}) in {{ location.area }} (x{{ location.coordinates.x }}, y{{ location.coordinates.y }}) <el-button icon="el-icon-search" circle @click="showMap(location)"></el-button>
    </li>

    <li v-if="location.type == 'Raid'">
      {{ location.enemy }} (level {{ location.level }}) in the Raid "{{ location.name }}"
    </li>

    <li v-if="location.type == 'Spells Learned'">
      Learn {{ location.number }} spells, then speak to the Mamool-Ja in Ul'Dah next to the BLU class trainer
    </li>

    <li v-if="location.type == 'Trial'">
      {{ location.enemy }} (level {{ location.level }}) in the Trial "{{ location.name }}"
    </li>
  </div>
</template>

<script>
  export default {
    props: {
      location: Object
    },
    methods: {
      showMap(location) {
        this.$store.dispatch('showMapBoxForLocation', location)
      }
    }
  }
</script>

<style>
  .location-list .el-button.is-circle {
    padding: 8px;
    margin-left: 5px;
  }
</style>
