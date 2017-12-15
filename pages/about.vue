<template>
  <section class="about">
    <h2 class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-about"></use>
      </svg>关于
    </h2>
    <p class="small-screen-indent">😄 曾使用JS + HTML5 + CSS3 + Node.js + Express.js + Mongodb开发过一个博客网站，也部署了一段时间😄</p>
    <p class="indent-1 small-screen-indent">😭 但因为当时初学，最后效果并不是很满意😭</p>
    <p class="indent-2 small-screen-indent">😅 后使用Hexo + GitHub Pages搭建了新的博客😅</p>
    <p class="indent-3 small-screen-indent">🙁 虽有很多好处，但个性化不足，以及存在的一些限制。依旧不是很满意🙁</p>
    <p class="indent-4 small-screen-indent">😜 遂决定重新开发自己的博客😜</p>
    <p class="indent-4 small-screen-indent">😀 使用Vue.js + Nuxt.js + ES6/7 + Node.js + Koa.js + mySql开发了此博客，代码已在GitHub上开源😀</p>
    <p class="indent-3 small-screen-indent">😉 前端代码:<a href="https://github.com/XNAL/don-blog" target="_blank">Talk is cheap.</a>😉</p>
    <p class="indent-2 small-screen-indent">😆 服务端代码:<a href="https://github.com/XNAL/don-blog-backManage" target="_blank">Show me the code.</a>😆</p>
    <p class="indent-1 small-screen-indent">😎 自己开发博客的好处是可以随意捣鼓，按照自己的想法去实现。当然也会存在一些不足😎</p>
    <p class="small-screen-indent">😙 如果有什么好的建议和意见，欢迎和我联系！😙</p>
    <div class="contact">      
      <span class="qrcode wx">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
      </span>
      <span class="qrcode qq">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qq"></use>
        </svg>
      </span>
      <a href="mailto:wwwtdonsite@gmail.com" class="no-underline" title="wwwtdonsite@gmail.com">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-email"></use>
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: '关于 - Powered by Don'
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
.about {
  padding: 2em;
  min-height: $minHeight;
  background-color: #fff;
  box-sizing: border-box;
  .title {
    margin-bottom: 1.2em;
    font-size: 2.5em;
    color: #333;
    line-height: 1;
    text-align: center;

    .icon {
      width: 0.9em;
      height: 0.9em;
      vertical-align: -0.05em;
      margin-right: 0.3em;
    }
  }
  p {
    font-size: 1em;
    line-height: 2;
    color: #333;

    a {
      color: $base-color;
      margin-left: 0.5em;
    }
  }
  .indent-1 {
    text-indent: 2em;
  }
  .indent-2 {
    text-indent: 4em;
  }
  .indent-3 {
    text-indent: 6em;
  }
  .indent-4 {
    text-indent: 8em;
  }
  .contact {
    margin-top: 4em;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;

    .icon {
      width: 5em;
      height: 5em;
    }
    .qrcode {
      position: relative;
      cursor: pointer;
      &::after {
        content:'';
        position: absolute;
        width: 20em;
        height: 20em;
        bottom: 5.5em;
        background-size: 100% 100%;
        transition: all 0.5s;
        opacity: 0;
        z-index: -1;
      }
      &:hover {
        &::after {
          opacity: 1;
          z-index: 1;
        }
      }
    }
    .wx::after {   
      left: -7.5em;
      background-image: url(/weixin.png);
    }
    .qq::after {
      left: -8em;
      background-image: url(/qq.png);
    }
  }
}
</style>

