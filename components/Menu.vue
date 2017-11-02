<template>
  <nav class="menu">
    <nuxt-link to="/">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-home"></use>
      </svg>HOME
    </nuxt-link>
    <nuxt-link to="/cat">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cat"></use>
      </svg>CATEGORY
    </nuxt-link>
    <nuxt-link to="/lab">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-lab"></use>
      </svg>LABORATORY
    </nuxt-link>
    <a href="https://github.com/XNAL" target="_blank">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-github"></use>
      </svg>GITHUB
    </a>
    <a href="https://segmentfault.com/u/tdon" target="_blank">
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
.menu {
  position: absolute;
  top: 10px;
  left: 0;
  width: 200px;
  a {
    display: block;
    margin-bottom: 10px;
    padding-left: 15px;
    height: 40px;
    font-size: 16px;
    color: #666;
    line-height: 40px;

    &.nuxt-link-exact-active {
      color: #2d8cf0;
      background-color: #fff;
    }
  }
  .icon {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
}
</style>


