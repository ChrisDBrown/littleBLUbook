<template>
  <el-table
    :data="spells">
    <el-table-column
      type="selection">
    </el-table-column>
    <el-table-column
      prop="id"
      label="No."
      sortable>
    </el-table-column>
    <el-table-column
      prop="name"
      label="Spell"
      sortable>
      <template slot-scope="scope">
        <img :src="'/spells/' + scope.row.id + '.png'" width="55" /> {{ scope.row.name }}
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
    <el-table-column
      prop="type"
      label="Type"
      sortable>
    </el-table-column>
    <el-table-column
      prop="level"
      label="Level"
      sortable>
    </el-table-column>
  </el-table>
</template>

<script>
  // Adapted from https://ffxiv.consolegameswiki.com/wiki/Blue_Magic_Spellbook
  // TODO: Handle cases where there's multiple ways to get a spell
  const spells = require('../assets/spells.json')

  export default {
    data() {
      return {
        spells: spells
      }
    }
  }
  </script>
