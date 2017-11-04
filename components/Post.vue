<template>
  <section class="post">
    <div class="meta">
      <p class="time">发布于 {{ post.createTime | formatTime }}</p>
      <nuxt-link class="cat-link" :to="{ name: 'category', params: { id: post.categoryId }}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cat"></use>
        </svg>{{ post.categoryName }}
      </nuxt-link>
    </div>
    <h4 class="title">
      <nuxt-link class="title-link" :to="{ name: 'post', params: { id: post.id }}">{{ post.title }}</nuxt-link>
    </h4>
    <div class="markdown-body" v-html="markdownContent"></div>
    <p class="more">
      <nuxt-link :to="{ name: 'post', params: { id: post.id }}">
        MORE<svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-more"></use>
        </svg>
      </nuxt-link>
    </p>
  </section>
</template>

<script>
import moment from 'moment';
const marked = require('marked');

export default {
  props: {
    post: Object
  },
  data () {
    return { markdownContent: '' };
  },
  created () {
    this.markdownContent = marked(this.post.content, { sanitize: true });
  },
  filters: {
    formatTime (time) {
      return moment(time).format('MM月DD, YYYY');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
.post {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 1em;
  padding: 1.4em;

  .title {
    font-size: 2.2em;
    color: #333;
    line-height: 1;
    margin-bottom: 1.5em;
    font-weight: 300;
  }
  .meta {
    position: relative;
    float: right;
    color: #555;
    font-size: 1.2em;
    line-height: 1;
    width: auto;
    text-align: right;

    .time {
      line-height: 2;
    }
    .cat-link {
      color: #999;
      &:hover {
        color: $base-color;
      }
    }
    .icon {
      width: 1.2em;
      height: 1.2em;
      vertical-align: -0.1em;
      margin-right: 0.4em;
      color: $base-color;
    }
  }
  .content {
    font-size: 1em;
    color: #666;
    line-height: 1.5;
  }
  .more {
    font-size: 1.2em;
    margin-top: 1.5em;
    color: $base-color;
    .icon {
      width: 1.1em;
      height: 1.1em;
      vertical-align: -0.12em;
      margin-left: 0.4em;
    }
  }
}
</style>
