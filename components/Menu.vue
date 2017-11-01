<template>
  <nav class="menu">
    <nuxt-link to="/">HOME</nuxt-link>
    <nuxt-link to="/cat">CATEGORY</nuxt-link>
    <nuxt-link to="/lab">LABORATORY</nuxt-link>
    <a href="https://github.com/XNAL" target="_blank">GITHUB</a>
    <a href="https://segmentfault.com/u/tdon" target="_blank">SEGMENTFAULT</a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 60px;
  left: 0;
  width: 200px;
  a {
    display: block;
    margin-bottom: 10px;
    padding-left: 40px; 
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    color: #666;
    line-height: 40px;

    &.nuxt-link-exact-active {
      color: #2d8cf0;
      background-color: #fff;
    }
  }
}
</style>


