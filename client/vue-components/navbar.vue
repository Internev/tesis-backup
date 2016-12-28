<!-- Created by Duncan on 12.28.2016 -->
<template>
  <nav class="navbar navbar-fixed-top">
    <div class="tools">
      <div class="tool-bar">
        <ul class="horizontal-ul">
          <li><span class="glyphicon glyphicon-file"></span></li>
          <li><span class="glyphicon glyphicon-repeat"></span></li>
          <li><span class="glyphicon glyphicon-comment"></span></li>
          <li><span class="glyphicon glyphicon-trash"></span></li>
        </ul>
      </div>
    </div>
    <div class="title">
      <p>Untitled</p>
    </div>
    <div class="avatar-area">
      <!-- can change fullname to image.//size throws an error however it is working?! -->
      <avatar fullname="Duncan Nevin" color="rgb(0, 0, 0)" size="20"></avatar>
    </div>
  </nav>
</template>

<script>
  import Avatar from 'vue-avatar-component'

  export default {
    components: { Avatar }
  }

</script>

<style>
  .navbar{
    display: table;
    background-color: rgb(24, 24, 24);
    height: 8em;
    width: 100vw;
    border: transparent;
  }
  .tools{
    position: relative;
    display: table-cell;
    height: 100%;
    width: 30vw;
  }
  .tool-bar{
    display: table;
    width: 100%;
    height: 4em;
    margin-top: 4em;
  }
  .horizontal-ul{
    display: table-row;
  }
  .horizontal-ul li{
    display: table-cell;
    margin: 0;
    text-align: center;
    vertical-align: middle;
  }
  .horizontal-ul li:hover{
    background-color: rgb(54, 54, 54);
    cursor: pointer;
  }
  .title{
    display: table-cell;
    height: 100%;
    color: rgb(255, 255, 255);
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
  }
  .avatar-area{
    display: table-cell;
    text-align: right;
    vertical-align: middle;
    padding-right: 2em;
  }
  .avatar{
    cursor: pointer;
  }
  .glyphicon{
    color: rgb(255, 255, 255);
  }
</style>