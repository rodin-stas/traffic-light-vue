<template>
<div class="TrafficLight">
  <Light  msg="Привет" sec=""/>
  <Light  msg="Привет" sec=""/>
  <Light  msg="Привет" sec=""/>
</div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <Light  msg="Привет" sec=""/> -->

</template>

<script>
import Light from './components/Light.vue'

export default {
  name: 'App',
  components: {
    Light 
  }
}
</script>

<style>
body{

  background-color:cornsilk;
}
.TrafficLight{
  width: 120px;
  height: 300px;
  background-color: black;
  border-radius: 15%;

  display: flex;
  flex-direction: column;
  justify-content:space-around;
}
#app {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
</style>
