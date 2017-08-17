<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-my-directive>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
    <axa shareUrl="baidu.com" shareTitle="hello title" shareDescription="描述描述啊啊啊啊" :shareSites="arr" shareWechatQrcodeTitle="T T"  shareWechatQrcodeHelper="aaaaaa"></axa>
  </div>
</template>

<script>
import Vue from 'vue'
import { share as axa } from '../plugin/index'

Vue.use(axa)
export default {
  components: {
    axa
  },
  name: 'hello',
  data() {
    return {
      arr:['qzone', 'qq', 'weibo','wechat', 'douban'],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    document.title = '123'
  },
  mounted() {
    this.ajax()
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
