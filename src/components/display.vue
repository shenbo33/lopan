<template>
    <div>
      <h3>Count is {{count}}</h3>
      <h3>AnoterIncrement is {{countAnother}}</h3>
      <p>组件自己的内部计算属性 {{localComputed}}</p>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({count: 'count'}),
    /* countAnother () {
      return this.$store.getters.countAnother
    }, */
    ...mapGetters(['countAnother']),
    localComputed () {
      return this.count + 10
    }
  }
  /*
  computed: {
   count () {
     return this.$store.state.count
   }
  }
  computed: mapState({
    count: state => {
      return state.count
    },
    count: 'count'
  })
  computed: mapState([
    'count'
  ])
  */
}

</script>

<style scoped>
  h3 {
    font-size: 30px;
  }
</style>
