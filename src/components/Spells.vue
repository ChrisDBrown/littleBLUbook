<template>
  <el-row
    type="flex"
    justify="center">
    <el-col
      :xs="24"
      :sm="24"
      :md="20"
      :lg="16"
      :xl="14">
      <el-table
        ref="spellsTable"
        :data="spells"
        v-on:row-click="handleRowClick">

        <el-table-column
          type="expand"
          width="20">
          <template slot-scope="scope">
            <ul class="location-list">
              <div v-for="(location, index) in scope.row.locations" v-bind:key="index">
                <Location :location="location" />
              </div>
            </ul>
          </template>
        </el-table-column>

        <el-table-column
          prop="id"
          label="No"
          width="70"
          header-align="center"
          align="center"
          sortable>
        </el-table-column>

        <el-table-column
          prop="name"
          label="Spell Name"
          header-align="center"
          sortable>
          <template slot-scope="scope">
            <div class="spell-name">
              <img :src="'/spells/' + scope.row.id + '.png'" class="spell-thumb" :alt="scope.row.name + ' Spell Icon'" /> <span>{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column
          prop="rank"
          label="Rank"
          header-align="center"
          align="center"
          v-if="window.width > 600"
          sortable>
          <template slot-scope="scope">
            <span v-for="n in scope.row.rank" :key="n">★</span>
          </template>
        </el-table-column>

        <el-table-column
          width="80"
          header-align="center"
          :label="learnedOutOfTotal">
          <template slot-scope="scope">
            <el-checkbox-button
              :value="isSpellLearned(scope.row.id)"
              v-on:change="handleLearnedClick(scope.row.id)"
              class="rounded-check">
                Got
              </el-checkbox-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
  import Location from './Location.vue'
  // Adapted from https://ffxiv.consolegameswiki.com/wiki/Blue_Magic_Spellbook
  const spells = require('../assets/spells.json')

  export default {
    data() {
      return {
        spells: spells,
        window: {
          width: 0,
          height: 0
        }
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
      },
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      }
    },
    computed: {
      learnedOutOfTotal() {
        return this.$store.state.learned.length + '/' + this.spells.length
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },
    components: { Location }
  }
</script>

<style>
.spell-thumb {
  width: 55px;
  border-radius: 20%;
  padding-right: 5px;
}

@media only screen and (max-width: 600px) {
  .spell-thumb {
    width: 40px;
  }
}

.spell-name {
  display:flex;
  flex-wrap: nowrap;
  align-items: center;
}

.rounded-check .el-checkbox-button__inner {
  border-radius: 20% !important;
}

td.el-table__expanded-cell[class*=cell] {
  padding: 0;
}

.location-list li {
  padding: 10px 0;
}
</style>
