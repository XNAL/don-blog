<template>
  <div class="time-line">
    <p class="time">{{ time }} ({{ posts.length }})</p>
    <ul class="post-list">
      <li class="post-item" v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="`/post/${post.id}`">{{ post.title }}</nuxt-link>
        <i class="create-time">{{ post.createTime }}</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    timePost: Array
  },
  data () {
    return {
      time: '',
      posts: []
    };
  },
  created () {
    this.time = this.timePost[0];
    this.posts = this.timePost[1];
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/sass/app';
.time-line {
  margin: 0.5em;
  .time {
    font-size: 1.5em;
    line-height: 1;
    color: #555;
  }
  .post-list {
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-start: 1.8em;
    .post-item {
      line-height: 2;
      a {
        color: $base-color;
      }
      .create-time {
        margin-left: 0.8em;
        font-size: 0.9em;
        color: #888;
      }
    }
  }
}
</style>


