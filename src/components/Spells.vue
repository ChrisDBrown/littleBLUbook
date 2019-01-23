<template>
  <div>
    <el-table
      ref="spellsTable"
      :data="spells"
      v-on:row-click="handleRowClick">
      <el-table-column type="expand">
        <template slot-scope="scope">
          {{ scope.row.locations }}
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

    <el-dialog title="Map" :visible.sync="showMapBox">
      {{ mapBoxInfo }}
    </el-dialog>
  </div>
</template>

<script>
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
    }
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
