<template>
  <div id="app">
    <div id="nav">
      <a-menu
              :defaultSelectedKeys="['1']"
              :defaultOpenKeys="['sub1']"
              mode="inline"
              :inlineCollapsed="collapsed"
              style="width: 256px"
      >
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span><router-link to="/">Home</router-link></span>
        </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="appstore" /><span>demo</span></span>
        <a-menu-item key="5"><router-link to="/about">demo1</router-link></a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      </a-menu>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
.container{
  flex: 1;
  padding: 20px;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  .nav-ul{
    list-style: none;
    padding: 20px;

    li{
      width: 120px;
      height: 30px;
      border: 1px solid #ccc;
      border-bottom: none;
      text-align: left;

      &:last-child{
        border-bottom: 1px solid #ccc;
      }
    }
  }
</style>

<script>
    export default {
        data () {
            return {
                collapsed: false,
            }
        },
        methods: {
            toggleCollapsed () {
                this.collapsed = !this.collapsed
            },
        },
    }
</script>
