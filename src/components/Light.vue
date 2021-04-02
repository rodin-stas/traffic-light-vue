<template>
  <div class="light">
    <div class="light-counter" v-if="lightIsOn">
      {{sec}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'light'
};
</script>

<style>

.light{
  background-color: red;
  border-radius: 50%;
  width: 80px;
  height: 80px;
}
  .light_red {
    background-color: red;
  }
  .light_green {
    background-color: green;
  }
  .light_yellow {
    background-color: yellow;
  }
</style>