<template>
  <section class="comment-section">
    <section class="comment-box">
      <div class="curve"></div>
      <div class="login-mask">
        <div class="login">登录</div>
      </div>
      <div class="content-area">
        <textarea rows="6" :v-model="commentContent" placeholder="此时此刻此地，要不要说点什么呢？"></textarea>
      </div>
      <div class="comment-action">
        <button class="btn-comment">评论一下</button>
      </div>
    </section>
    <section class="comment-list">
      <div class="empty-comment">还没有评论，快来抢沙发吧！</div>
    </section>
  </section>
</template>

<script>
export default {
  data () {
    return {
      author: {
        id: 0,
        name: '',
        avatar: ''
      },
      commentContent: ''
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
.comment-section {
  margin: 3em auto;
  .comment-box {
    position: relative;
    padding-top: 3.5em;
    .curve {
      position: absolute;
      top: 0;
      left: 0.2em;
      width: 4em;
      height: 4em;
      border-radius: 100%;
      border: 1px solid $base-color;
      background: #fff;
      z-index: 999;
    }
    .login-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 10em;
      height: 3.5em;
      background: #fff;
      z-index: 1000;
    }
    .login {
      position: absolute;
      top: 0.7em;
      left: 0.7em;
      width: 3em;
      height: 3em;
      border-radius: 100%;
      border: 1px solid $base-color;
      text-align: center;
      color: $base-color;
      line-height: 3em;
      z-index: 1001;
      cursor: pointer;
    }
    textarea {
      padding: 0.8em;
      line-height: 1.5;
      width: 100%;
      resize: none;
      border: 1px solid $base-color;
      outline: none;
      border-radius: 0.4em;
      box-sizing: border-box;
    }
    .comment-action {
      margin-top: 0.4em;
      position: relative;
      .btn-comment {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.6em 1em;
        border-radius: 0.4em;
        color: #fff;
        letter-spacing: 0.1em;
        background: $base-color;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
  .comment-list {
    margin-top: 4.2em;
    font-size: 0.8em;
    color: #999;
    line-height: 2.6em;
    text-align: center;
    border-radius: 0.4em;
    background: #f0f0f0;
  }
}
</style>


