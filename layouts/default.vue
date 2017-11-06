<template>
  <div class="main">
    <don-header/>
    <div class="container">
      <don-menu/>
      <div class="main-container">
        <nuxt/>
      </div>
    </div>
    <don-footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Menu from '~/components/Menu.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    'don-header': Header,
    'don-menu': Menu,
    'don-footer': Footer
  }
};
</script>

<style lang="scss">
@import "~assets/sass/app";
.main {
  position: relative;
  box-sizing: border-box;
  min-height: calc(100vh - 5.2em);

  .main-container {
    position: relative;
    margin-top: 5.2em;
    margin-left: 15em;
    min-height: calc(100vh - 10em);
  }
}
</style>
