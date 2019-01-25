<template>
  <div>
    <el-table
      ref="spellsTable"
      :data="spells"
      v-on:row-click="handleRowClick">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <!-- TODO: Need to split this into a separate component to avoid this becoming messy when all possible types are added -->
          <div v-for="(location, index) in scope.row.locations" v-bind:key="index">
            <div v-if="location.type == 'Open World'">
              {{ location.enemy }} in {{ location.area }}
              <b>TESTING NETLIFY AUTO-DEPLOY</b>
              <el-button
                @click="mapBoxInfo = { mapName: location.area, xValue: location.coordinates.x, yValue: location.coordinates.y }; showMapBox = true">
                Show Map
              </el-button>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="No."
        width="70"
        sortable>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Spell"
        sortable>
        <template slot-scope="scope">
          <div class="spell-name">
            <img :src="'/spells/' + scope.row.id + '.png'" class="spell-thumb hidden-xs-only" /> <span>{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="rank"
        label="Rank"
        sortable>
        <template slot-scope="scope">
          <span v-for="n in scope.row.rank" :key="n">★</span>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="Map" :visible.sync="showMapBox" width="90%">
      <div v-if="mapBoxInfo">
        <Map :mapName="mapBoxInfo.mapName" :xValue="mapBoxInfo.xValue" :yValue="mapBoxInfo.yValue" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Map from './Map.vue'
  // Adapted from https://ffxiv.consolegameswiki.com/wiki/Blue_Magic_Spellbook
  const spells = require('../assets/spells.json')

  export default {
    data() {
      return {
        spells: spells,
        showMapBox: false,
        mapBoxInfo: null
      }
    },
    methods: {
      handleRowClick(row) {
        this.$refs.spellsTable.toggleRowExpansion(row);
      }
    },
    components: { Map }
  }
</script>

<style>
.spell-thumb {
  width: 55px;
  border-radius: 20%;
  padding-right: 5px;
}

.spell-name {
  display:flex;
  flex-wrap: nowrap;
  align-items: center
}
</style>
