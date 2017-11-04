<template>
  <div class="main">
    <don-header/>
    <div class="main-container container">
      <don-menu/>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Menu from '~/components/Menu.vue';

export default {
  components: {
    'don-header': Header,
    'don-menu': Menu
  }
};
</script>

<style lang="scss">
@import "~assets/sass/app";
.main {
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;

  .main-container {
    position: relative;
    margin-top: 5.2em;
  }
}
</style>
