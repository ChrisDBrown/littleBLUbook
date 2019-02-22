<template>
  <div class="map-container">
    <img
      :srcset="srcSet"
      :sizes="sizes"
      :src="'/maps/' + mapName + '-2300w.jpg'"
      :alt="mapName + ' Map'"
      width="100%" />
    <svg
      class="map-marker"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      :style="'top:' + yOffset + '%; left: ' + xOffset + '%;'">
      <circle
        cx="15"
        cy="15"
        r="15"
        stroke="#e2330f"
        stroke-width="4"
        stroke-dasharray="8 4"
        fill="#af695b"
        fill-opacity="0.3" />
    </svg>
  </div>
</template>

<script>
  const sizeFactors = require('../assets/mapsizefactors.json')
  const responsiveImageSizes = require('../assets/sizes.json')

  const maxSizeForFactors = {
    95: 44.1,
    100: 41.9,
    200: 21.4,
    300: 14.6,
    400: 11.2,
    800: 6.1
  }

  export default {
    props: {
      mapName: String,
      xValue: Number,
      yValue: Number
    },
    computed: {
      mapMaxSize() {
        let sizeFactor = sizeFactors[this.mapName]
        if (!sizeFactor) {
          // if we don't have the factor for the map, return the most common
          // likely missing data
          sizeFactor = 100
        }

        let maxSize = maxSizeForFactors[sizeFactor]
        if (!maxSize) {
          // if we don't have the max size for the factor, return the most common
          // means SE have added new map sizes, so log an error to update
          maxSize = 41.9
        }

        return maxSize
      },
      xOffset() {
        return ((this.xValue - 1) / (this.mapMaxSize - 1)) * 100
      },
      yOffset() {
        return ((this.yValue - 1) / (this.mapMaxSize - 1)) * 100
      },
      srcSet() {
        const srcSet = responsiveImageSizes.reduce((srcSet, size) => {
          const srcForSize = encodeURI('/maps/' + this.mapName + '-' + size.generatedWidth + 'w.jpg') + ' ' + size.generatedWidth + 'w, '
          return srcSet + srcForSize
        }, '')

        return srcSet.substring(0, srcSet.length - 2)
      },
      sizes() {
        const sizeSet = responsiveImageSizes.reduce((sizes, size) => {
          if (size.maxScreenWidth) {
            return sizes + '(max-width: ' + size.maxScreenWidth + ') ' + size.displayWidth + ','
          }

          return sizes + size.displayWidth + ','
        }, '')

        return sizeSet.substring(0, sizeSet.length - 1)
      }
    }
  }
</script>

<style>
.map-container {
  position: relative;
}

.map-marker {
  position: absolute;
  overflow: visible;
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
}
</style>
