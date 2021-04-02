<template>
  <div
  components: { Light },iv class="container">
    <Light class="lamp" color="red" />
    <Light class="lamp" color="yellow" />
    <Light class="lamp" color="green" />
  </div>
</template>

<script>
// import Light from '../components/Light.vue';

</script>

<style>
  .lamp {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
  }
</style>