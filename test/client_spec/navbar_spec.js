// <!-- Created by Duncan on 12.28.2016 -->
const Vue = require('vue');
const Navbar = require('../../client/vue-components/navbar.vue');

  describe('Navbar', () => {
    // Inspect the raw component options
    it('has a created hook', () => {
      expect(typeof Navbar.created).toBe('function');
    })
});