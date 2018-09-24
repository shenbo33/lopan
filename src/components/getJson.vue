<template>
  <div>
    <button onclick="getJsonStr">获取Json字符串</button>
    <span> {{ jsonStr }} </span>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      jsonStr: 'nothing ~ '
    }
  },
  methods: {
    getJsonStr () {
      this.jsonStr = this.getJsonStrFromServer()
    },
    getJsonStrFromServer () {
      const path = `http://127.0.0.1:5000/api/v1.0/tasks`
      axios.get(path)
        .then(response => {
          this.jsonStr = response.data.tasks
        }).catch(reason => {
          console.error(reason)
        })
    }
  },
  created () {
    this.getJsonStr()
  }
}
</script>
