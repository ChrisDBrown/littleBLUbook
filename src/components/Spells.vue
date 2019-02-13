<template>
  <div>
    <el-table
      ref="spellsTable"
      :data="spells"
      v-on:row-click="handleRowClick">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <table>
            <tr v-for="(location, index) in scope.row.locations" v-bind:key="index">
              <Location :location="location" />
            </tr>
          </table>
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
      <el-table-column>
        <template slot-scope="scope">
          <el-checkbox-button :value="isSpellLearned(scope.row.id)" v-on:change="handleLearnedClick(scope.row.id)">Learned</el-checkbox-button>
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
  import Location from './Location.vue'
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
        this.$refs.spellsTable.toggleRowExpansion(row)
      },
      handleLearnedClick(id) {
        this.$store.dispatch('toggleLearnedSpell', id)
      },
      isSpellLearned (id) {
        return this.$store.state.learned.includes(id)
      }
    },
    components: { Location, Map }
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