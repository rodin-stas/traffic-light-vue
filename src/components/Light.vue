<template>
    <div class="light">
    <div class="light_counter">
      {{sec}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Light ',
  props: {
    msg: String,
    sec: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light{
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background-color: aqua;
  border-radius: 50%;
}
</style>
