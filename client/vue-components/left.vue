<!-- Created by Duncan on 12.28.2016 -->
<template>
  <div class="left">

    <div class="tool-bar">
      <ul class="horizontal-ul">
        <li class="file"><span class="glyphicon glyphicon-file"></span></li>
        <li><span class="glyphicon glyphicon-repeat"></span></li>
        <li><span class="glyphicon glyphicon-comment"></span></li>
        <li><span class="glyphicon glyphicon-trash"></span></li>
      </ul>
    </div>

    <div class="count">
      <p>count: <span>319</span></p>
    </div>
  </div>

</template>

<script>

</script>

<style>
  .left{
    position: fixed;
    display: table-cell;
    z-index: 10;
    top: 4em;
    background-color: rgb(54, 54, 54);
    display: table-cell;
    margin: 0;
    width: 30vw;
    height: 100vh;
  }
  .count{
    position: fixed;
    height: 8em;
    background-color: rgb(24, 24, 24);
    width: 30vw;
    color: rgb(255, 255, 255);
    bottom: 0;
    text-align: center;
    vertical-align: middle;
  }
  .count span{
    font-size: 20px;
  }
  .count p{
    margin-top: 3em;
  }
  .left, .count{
    left: -29.9vw;
    z-index: 2;
    -webkit-transition: left 0.5s ease-in-out;
    -moz-transition: left 0.5s ease-in-out;
    -o-transition: left 0.5s ease-in-out;
    -ms-transition: left 0.5s ease-in-out;
    transition: left 0.5s ease-in-out;
  }
  .tool-bar{
    position: relative;
    background-color: rgb(24, 24, 24);
    top: 0;
    display: table;
    width: 100%;
    height: 4em;
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
  .left:hover{
    left: 0;
  }
  .left:hover .count{
    left: 0;
  }
</style>