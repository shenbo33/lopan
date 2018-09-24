<!-- 展示模板 -->
<template>
  <div id="app" class="layout" >
    <Layout :style="{minHeight: '99vh'}">
      <headerPart></headerPart>
      <Layout :style="{padding: '0 50px'}" >
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>

        <Content :style="{padding: '24px 0', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}" >
              <leftPart></leftPart>
              <div style="background:#eee;padding: 20px;">
                <Card :bordered="false">
                  <p slot="title">No border title</p>
                  <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                </Card>
              </div>
            </Sider>
            <Content :style="{padding: '24px', background: '#fff'}">
              <router-view/>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <footerPart ></footerPart>
    </Layout>
  </div>
</template>

<script>
import headerPart from './components/common/header'
import footerPart from './components/common/footer'
import leftPart from './components/common/left'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
    headerPart,
    footerPart,
    leftPart
  }
}
</script>
<!-- 样式代码 -->
<style>

  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

</style>
