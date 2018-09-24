<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo" :style="{backgroundImage:titleBgImgUrlStr}"></div>
      <div class="layout-nav">
        <MenuItem name="1">
          <Icon type="ios-navigate"></Icon>
          <router-link to="/home" >首页</router-link>
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-keypad"></Icon>
          <router-link to="/about" >关于</router-link>
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-analytics"></Icon>
          Item 3
        </MenuItem>
        <MenuItem name="4">
          <Icon type="ios-paper"></Icon>
          Item 4
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>

<script>
const titleBgImgUrl = require('../../assets/logo.png')

export default {
  name: 'header-part',
  data () {
    return {
      titleBgImgUrlStr: 'url(' + titleBgImgUrl + ')'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .layout-logo{
    width: 200px;
    height: 40px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    background:  no-repeat left 5px top;
    background-size: contain;
  }
  .layout-nav{
    width: 420px;
    margin: 0 20px 0 auto;
  }
</style>
