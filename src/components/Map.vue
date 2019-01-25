<template>
  <div>
    <img :src="'/maps/' + mapName + '.jpg'" width="100%" class="map" />
    <span class="map-marker" :style="'top:' + (yValue * 2) + '%; left: ' + (xValue * 2) + '%;'">X</span>
  </div>
</template>

<script>
  export default {
    props: {
      mapName: String,
      xValue: Number,
      yValue: Number
    }
  }
</script>

<style>
.map {
  position: relative;
  width: 100%;
}

.map-marker {
  position: absolute;
  color: red;
  font-size: 30px;
  font-weight: 900;
}
</style>
