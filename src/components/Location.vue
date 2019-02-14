<template>
  <div>
    <table>
      <div v-if="location.type == 'Default'">
        <td>Acquired by default when BLU is unlocked</td>
      </div>

      <div v-if="location.type == 'Dungeon'">
        <td>{{ location.enemy }} (level {{ location.level }}) in the Dungeon "{{ location.name }}"</td>
      </div>

      <div v-if="location.type == 'FATE'">
        <td>{{ location.enemy }} (level {{ location.level }}) in the FATE "{{ location.name }}" in {{ location.area }} (x{{ location.coordinates.x }},y{{ location.coordinates.y }}) <el-button icon="el-icon-search" circle @click="showMap(location)"></el-button></td>
      </div>

      <div v-if="location.type == 'Hunt Mark'">
        <td>Hunt Mark {{ location.enemy }} (level {{ location.level }}) in {{ location.area }}</td>
      </div>

      <div v-if="location.type == 'Levequest'">
        <td>{{ location.enemy }} (level {{ location.level }}) in the Levequest "{{ location.name }}" in {{ location.area }} (x{{ location.coordinates.x }},y{{ location.coordinates.y }}) <el-button icon="el-icon-search" circle @click="showMap(location)"></el-button></td>
      </div>

      <div v-if="location.type == 'Masked Carnivale Enemy'">
        <td>{{ location.enemy }} in Masked Carnivale stage {{ location.stage }}, "{{ location.name }}"</td>
      </div>

      <div v-if="location.type == 'Masked Carnivale Stages'">
        <td>Clear stage {{ location.stage }} of the Masked Carnivale</td>
      </div>

      <div v-if="location.type == 'Open World'">
        <td>{{ location.enemy }} (level {{ location.level }} in {{ location.area }} (x{{ location.coordinates.x }},y{{ location.coordinates.y }}) <el-button icon="el-icon-search" circle @click="showMap(location)"></el-button></td>
      </div>

      <div v-if="location.type == 'Raid'">
        <td>{{ location.enemy }} (level {{ location.level }}) in the Raid "{{ location.name }}"</td>
      </div>

      <div v-if="location.type == 'Spells Learned'">
        <td>Learn {{ location.number }} spells, then speak to the Mamool-Ja in Ul'Dah next to the BLU class trainer</td>
      </div>

      <div v-if="location.type == 'Trial'">
        <td>{{ location.enemy }} (level {{ location.level }}) in the Trial "{{ location.name }}"</td>
      </div>
    </table>
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
