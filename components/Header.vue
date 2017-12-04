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
        <span class="desc">Stay curious. Stay humble.</span>
        <div class="search fr">
          <input type="text" :class="{ 'show': showInput }" 
                v-model.trim="keyword" @keyup.enter="searchKeyWord" placeholder="search...">
          <svg class="icon" aria-hidden="true" @click="clickSearch">
            <use xlink:href="#icon-search"></use>
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
  background-color: rgba(255, 255, 255, 0.7);
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
      // width: 5.5em;
    }
    .desc {
      float: left;
      margin-left: 8em;
      font-size: 1em;
      letter-spacing: 0.08em;
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
    .side-menu-icon {
      position: relative;
      .icon {
        position: absolute;
        top: 1.3em;
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


