// <!-- Created by Duncan on 12.28.2016 -->
import Vue from 'vue'
import Navbar from './vue-components/navbar.vue'
import Left from './vue-components/left.vue'
import Right from './vue-components/right.vue'

  new Vue({
    el: 'navbar',
    components: { Navbar }
  }),

  new Vue({
    el: 'left',
    components: { Left }
  })

  new Vue({
    el: 'right',
    components: { Right }
  })

module.exports = {}

