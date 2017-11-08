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
    <div class="top-bar">
      <div class="container">
        <span class="to-top">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-toTop"></use>
          </svg>
        </span>
      </div>
    </div> 
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

  .main-container {
    position: relative;
    margin-top: 5.2em;
    margin-left: 15em;
    min-height: $minHeight;
  }
  .top-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 10em;
  }
  .to-top {
    position: absolute;
    z-index: 99999;
    bottom: 0;
    right: -7em;
    cursor: pointer;

    .icon {
      width: 3em;
      height: 3em;
    }
  }
}
</style>
