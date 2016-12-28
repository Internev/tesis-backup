import Vue from 'vue'
import Navbar from './vue-components/navbar.vue'
import Left from './vue-components/left.vue'
import Right from './vue-components/right.vue'

new Vue({
  el: 'navbar',
  components: { Navbar }
})

new Vue({
  el: 'left',
  components: { Left }
})

new Vue({
  el: 'right',
  components: { Right }
})
