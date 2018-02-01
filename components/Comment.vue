<template>
  <section class="comment-section">
    <section class="comment-box">
      <div class="login"></div>
      <div class="content-area">
        <textarea rows="6" :v-model="commentContent" placeholder="此时此刻此地，要不要说点什么呢？"></textarea>
      </div>
    </section>
    <section class="comment-list">

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
  margin: 40px auto;
  .comment-box {
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
  }
}
</style>


