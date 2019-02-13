import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const localStorage = store => {
  if (window.localStorage.getItem('learned')) {
    store.commit('setLearnedSpells', JSON.parse(window.localStorage.getItem('learned')))
  }

  store.subscribe((mutation, state) => {
    window.localStorage.setItem('learned', JSON.stringify(state.learned))
  })
}

export default new Vuex.Store({
  state: {
    learned: []
  },
  mutations: {
    setLearnedSpells (state, learnedSpells) {
      state.learned = learnedSpells
    },
    toggleLearnedSpell (state, spell) {
      if (!state.learned.includes(spell)) {
        state.learned.push(spell)
        state.learned.sort()
      } else {
        state.learned = state.learned.filter(item => item !== spell)
      }
    }
  },
  actions: {
    setLearnedSpells({ commit }, learnedSpells) {
      commit('setLearnedSpells', learnedSpells)
    },
    toggleLearnedSpell({ commit }, spell) {
      commit('toggleLearnedSpell', spell)
    }
  },
  plugins: [localStorage],
  strict: process.env.NODE_ENV !== 'production'
})
