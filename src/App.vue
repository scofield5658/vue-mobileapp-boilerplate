<template>
  <div id="app">
    <mt-header :title="$route.name" :fixed="true"></mt-header>
    <router-view />
    <mt-tabbar v-if="isLogin" v-model="selected" :fixed="true">
      <mt-tab-item id="/home">
        <icon slot="icon" name="home" />
        主页
      </mt-tab-item>
      <mt-tab-item id="/product">
        <icon slot="icon" name="bookmark-o" />
        产品
      </mt-tab-item>
      <mt-tab-item id="/mine">
        <icon slot="icon" name="user-circle-o" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  // import colors from '@/colors'
  export default {
    name: 'app',
    components: {},
    mixins: [],
    computed: {
      ...mapState({
        isLogin: state => state.account.isLogin,
        theme: state => state.system.theme
      })
    },
    data () {
      return {
        selected: '/login'
      }
    },
    methods: {
      handleTheme: function (theme) {
        // TODO:
      },
      getWindowSize: function () {
        this.$store.commit('WINDOW_RESIZE', {
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
    },
    created () {
      this.$store.dispatch('setPlatform', window.navigator.platform)
      this.handleTheme(this.theme)
      this.getWindowSize()
      window.onresize = () => {
        this.getWindowSize()
      }
    },
    watch: {
      theme: function (newVal) {
        this.handleTheme(newVal)
      },
      selected: function (newVal) {
        if (newVal === '/login') {
          return
        }
        this.$router.replace(newVal)
      },
      isLogin: function (newVal) {
        if (newVal) {
          this.selected = '/home'
        } else {
          this.selected = '/login'
          this.$router.replace('/login')
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding: 0;
  margin: 0;
  margin-top: 40px;
  color: #2c3e50;
}
</style>
