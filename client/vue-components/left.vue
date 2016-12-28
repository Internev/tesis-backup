<template>
  <div class="left">
    <div class="count navbar-fixed-bottom">
      <div class="container">
        <div>count: <span>319</span></div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .left{
    position: relative;
    background-color: rgb(54, 54, 54);
    display: table-cell;
    margin: 0;
    width: 30vw;
    height: 100vh;
  }
  .count{
    display: table;
    height: 8em;
    background-color: rgb(24, 24, 24);
    width: 30vw;
    color: rgb(255, 255, 255);
  }
  .container{
    display: table-cell;
    width: 30vw;
    height: 100%;
    margin: 0;
    text-align: center;
    vertical-align: middle;
  }
  .container span{
    font-size: 20px;
  }
</style>