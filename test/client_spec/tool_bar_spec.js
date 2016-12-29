// <!-- Created by Duncan on 12.28.2016 -->
const Vue = require('vue');
const ToolBar = require('../../client/vue-components/tool_bar.vue');

describe('ToolBar', () => {

  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof ToolBar.created).toBe('function');
  });
});