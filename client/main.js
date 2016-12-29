// <!-- Created by Duncan on 12.28.2016 -->
import Vue from 'vue'
import Navbar from './vue-components/navbar.vue'
import MainContent from './vue-components/main_content.vue'
import VueSocketio from 'vue-socket.io'
// Websocket connection using vue-socket.io
Vue.use(VueSocketio, 'http://localhost:3000');

  new Vue({
    el: 'navbar',
    components: { Navbar }
  }),

  new Vue({
    el: 'main-content',
    sockets: {
      connect() {
        console.log('socket connected')
      }
    },
    components: { MainContent }
  })

// For testing only
module.exports = {}

