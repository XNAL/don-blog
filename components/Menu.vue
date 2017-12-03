<template>
  <nav class="menu">
    <nuxt-link to="/" class="no-underline">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-home"></use>
      </svg>HOME
    </nuxt-link>
    <nuxt-link to="/archive" class="no-underline">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-archive"></use>
      </svg>ARCHIVE
    </nuxt-link>
    <nuxt-link to="/laboratory" class="no-underline">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-lab"></use>
      </svg>LABORATORY
    </nuxt-link>
    </nuxt-link>
    <nuxt-link to="/about" class="no-underline">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-about"></use>
      </svg>ABOUT
    </nuxt-link>
    <a href="https://github.com/XNAL" target="_blank" class="no-underline">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-github"></use>
      </svg>GITHUB
    </a>
    <a href="https://segmentfault.com/u/tdon" target="_blank" class="no-underline">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sf"></use>
      </svg>SEGMENTFAULT
    </a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
.menu {
  position: fixed;
  top: 5.2em;
  // left: calc(50% - 40em);
  // width: 14em;
  a {
    display: block;
    margin-bottom: 0.8em;
    padding-left: 1em;
    height: 3em;
    font-size: 1.2em;
    color: #666;
    line-height: 3em;

    &.nuxt-link-exact-active {
      color: $base-color;
      background-color: #fff;
    }
  }
  .icon {
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
  }
}
</style>


