export default {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },
  INCREMENT_WITH_VALUE (state, value) {
    state.count += (value.incValue + value.anoValue)
  },
  SHOW_WAITING_MESSAGE (state) {
    state.waiting = true
  },
  HIDE_WAITING_MESSAGE (state) {
    state.waiting = false
  }

}
