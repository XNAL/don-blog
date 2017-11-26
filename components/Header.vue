<template>
    <header>
      <section class="header-container container">
				<div class="logo-title">
          <nuxt-link to="/">
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
				</div>
			</section>
    </header>
</template>

<script>
export default {
  data () {
    return {
      keyword: '',
      showInput: false
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
  z-index: 9999;

  .header-container {
    color: $base-color;
    .logo {
      float: left;
      margin: 0.6em 1em 0;
      width: 3em;
      height: 3em;
    }
    h2 {
      float: left;
      font-size: 2.2em;
      text-align: left;
      font-weight: 500;
      width: 5.5em;
    }
    .desc {
      float: left;
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
        top: 0.4em;
        right: 1.8em;
        width: 0;
        box-sizing: border-box;
        line-height: 1.8em;
        color: #666;
        border: none;
        border-bottom: 1px solid $base-color;
        background-color: rgba(255, 255, 255, 0.7);
        outline: none;
        transition: 0.5s width linear;
        &.show {
          padding: 0.3em 0.5em;
          width: 18em;
        }
      }
    }
  }
}
</style>


