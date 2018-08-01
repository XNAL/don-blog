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
    <nuxt-link to="/about" class="no-underline">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-about"></use>
      </svg>ABOUT
    </nuxt-link>
    <a href="https://github.com/XNAL" target="_blank" class="no-underline" @click="goToOtherWebsite('GITHUB')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-github"></use>
      </svg>GITHUB
    </a>
    <a href="https://segmentfault.com/u/tdon" target="_blank" class="no-underline" @click="goToOtherWebsite('SEGMENTFAULT')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sf"></use>
      </svg>SEGMENTFAULT
    </a>
    <a href="https://juejin.im/user/59b9f345f265da066464180c" target="_blank" class="no-underline juejin" @click="goToOtherWebsite('JUEJIN')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-juejin"></use>
      </svg>JUEJIN
    </a>
  </nav>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  methods: {
    goToOtherWebsite (type) {
      axios.post('/track/addEventTrack', qs.stringify({
        key: `GO_TO_${type}`
      }));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
.menu {
  position: fixed;
  top: 5.2em;
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
    &.juejin {
      .icon {
        vertical-align: -0.05em;
      }
    }
  }
  .icon {
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
  }
}
</style>


