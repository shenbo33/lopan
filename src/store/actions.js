export default {
  increment ({commit}) {
    commit('INCREMENT')
  },
  decrement (context) {
    context.commit('DECREMENT')
  },
  incrementWithValue ({commit}, value) {
    commit('SHOW_WAITING_MESSAGE')
    let incValue = Number.parseInt(value.incrementValue)
    let anoValue = Number.parseInt(value.anotherValue)
    setTimeout(() => {
      if (isNaN(incValue)) {
        throw new Error('Not An Interger')
      } else {
        commit('HIDE_WAITING_MESSAGE')
        commit('INCREMENT_WITH_VALUE', {incValue, anoValue})
      }
    }, 2000)
  }
}
