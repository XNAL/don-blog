<template>
  <div>
    <header>
      <section class="header-container container">
        <span class="side-menu-icon">
          <svg class="icon" aria-hidden="true" @click="isShowSideMenu = true">
            <use xlink:href="#icon-menu"></use>
          </svg>
        </span>
        <nuxt-link to="/" class="logo-info no-underline">
          <img class="logo" src="/logo.png" alt="logo">
          <h2>DON</h2>
        </nuxt-link>
        <span class="desc">STAY CURIOUS. STAY HUMBLE.</span>
        <div class="search fr">
          <input type="text" :class="{ 'show': showInput }" 
                v-model.trim="keyword" @keyup.enter="searchKeyWord" placeholder="search..." maxlength="20">
          <svg class="icon" aria-hidden="true" @click="clickSearch">
            <use xlink:href="#icon-search"></use>
          </svg>
        </div>
        <div :class="['small-screen-search', { 'show': showInput }]">
          <input type="text" v-model.trim="keyword" @keyup.enter="searchKeyWord" placeholder="search..." maxlength="20">
          <svg class="icon" aria-hidden="true" @click="hideSearch">
            <use xlink:href="#icon-delete"></use>
          </svg>
        </div>
			</section>
    </header>
    <side-menu :is-show="isShowSideMenu" @hide-menu="isShowSideMenu = false"></side-menu>  
  </div>
</template>

<script>
import SideMenu from './SideMenu';

export default {
  components: {
    SideMenu
  },
  data () {
    return {
      keyword: '',
      showInput: false,
      isShowSideMenu: false
    };
  },
  methods: {
    clickSearch: function () {
      if (this.showInput && this.keyword) {
        this.searchKeyWord();
      } else {
        this.showInput = !this.showInput;
      }
    },
    searchKeyWord: function () {
      if (this.keyword) {
        this.$router.push({ path: `/search/keyword/${this.keyword}` });
      }
    },
    hideSearch: function () {
      this.keyword = '';
      this.showInput = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4.2em;
  line-height: 4.2em;
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(238, 238, 238, 0.6);
  z-index: 999;
  overflow: hidden;

  .header-container {
    position: relative;
    height: 100%;
    overflow: hidden;
    color: $base-color;
    .logo-info {
      display: block;
      float: left;
    }
    .logo {
      float: left;
      margin: 0.6em 1em 0 0;
      width: 3em;
      height: 3em;
      transition: all .3s;
      &:hover {
        transform: scale(1.2) rotate(360deg);
      }
    }
    h2 {
      float: left;
      font-size: 2.2em;
      text-align: left;
      font-weight: 500;
    }
    .desc {
      float: left;
      margin-left: 8em;
      font-size: 1em;
      letter-spacing: 0.1em;
    }
    .search {
      position: relative;
      float: right;
      .icon {
        position: absolute;
        top: 1.3em;
        right: 0;
        width: 1.5em;
        height: 1.5em;
        color: #555;
        cursor: pointer;
      }
      input {
        position: absolute;
        top: 0.7em;
        right: 1.8em;
        width: 0;
        padding: 0.3em 0 0.1em;
        box-sizing: border-box;
        line-height: 1.8em;
        color: #666;
        border: none;
        border-bottom: 1px solid $base-color;
        background: #fcfcfc;
        outline: none;
        transition: 0.5s width linear;
        &.show {
          padding: 0.3em 0 0.1em 0.8em;
          width: 18em;
        }
      }
    }
    .small-screen-search {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 4.2em;
      z-index: 1000;
      background: #fff;
      padding: 0.6em 2.5em 0.6em 1em;
      box-sizing: border-box;
      opacity: 0;
      transform: translateY(-100%);
      transition: 0.4s all linear;
      input {
        float: left;
        width: 100%;
        height: 2.5em;
        font-size: 1.2em;
        line-height: 2.5em;
        color: #888;
        box-sizing: border-box;
        border: none;
        outline: none;
      }
      .icon {
        position: absolute;
        top: 1.6em;
        right: 1.2em;
        width: 1em;
        height: 1em;
        color: #555;
        cursor: pointer;
      }
      &.show {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .side-menu-icon {
      position: relative;
      .icon {
        position: absolute;
        top: 1.4em;
        left: 0;
        width: 1.4em;
        height: 1.4em;
        color: #555;
        cursor: pointer;
      }
    }
  }
}
</style>


