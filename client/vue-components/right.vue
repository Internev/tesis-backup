<!-- Created by Duncan on 12.28.2016 -->
<template>
  <div class="right">
    <markdown></markdown>
  </div>
</template>

<script>
  // Markdown editor --> Ready for Joel's functionality
  import Markdown from './markdown.vue'

  export default {
    components: { Markdown }
  }

</script>

<style>
  .right{
    position: relative;
    border: 1px solid transparent;
    display: table-cell;
    margin: 0 auto;
    width: 70vw;
  }
</style>