<template>
  <div>
    <h1>Home</h1>
    <p>{{messageStr}}</p>
  </div>
</template>

<script>
export default {
  date () {
    return {
      messageStr: 'I am Home component'
    }
  }
}
</script>

<style scoped>

</style>
