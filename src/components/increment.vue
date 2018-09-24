<template>
  <div>
    <div>
      <button @click="add">+1</button>
      <button @click="decrement">-1</button>
    </div>
    <div>
      <input type="text" v-model="incrementValue" />
      <input type="button" @click="incrementWithValue" value="increment" style="margin-top: 20px;">
    </div>
    <div v-if ="show">
      waiting
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      incrementValue: 0
    }
  },
  computed: {
    show () {
      return this.$store.state.waiting
    },
    /* countAnother: function () { // 获取getters
      return this.$store.getters.countAnother
    } */
    ...mapGetters(['countAnother'])
  },
  methods: {
    /* increment () {
      this.$store.dispatch('increment')
    },
    decrement () {
      this.$store.dispatch('decrement')
    } */
    ...mapActions([
      'decrement'
    ]),
    ...mapActions({
      add: 'increment'
    }),
    incrementWithValue () {
      try {
        // dispatch 只能接受一个参数，需要传对象参数
        this.$store.dispatch('incrementWithValue', {
          incrementValue: this.incrementValue,
          anotherValue: this.countAnother
        })
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style scoped>
  button  {
    width: 100px;
    height: 100px;
    font-size: 30px;
  }
</style>
