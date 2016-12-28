<!-- Created by Duncan on 12.28.2016 -->
<template>
  <div id="editor">
    <textarea :value="input" @input="update"></textarea>
  </div>
</template>

<script>
  import _ from 'underscore'

  // Leaving out markdown compiler for now

  export default {
    data() {
      return {
        input: '# hello',
        update: _.debounce(function (e) {
          this.input = e.target.value
        }, 300)
      }
    }
  }
</script>

<style>
  html, body, #editor {
    margin: 0;
    height: 100%;
    color: #333;
  }

  textarea, #editor div {
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }
</style>