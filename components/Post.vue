<template>
  <section class="post">
    <div class="meta">
      <p class="time">发布于 {{ post.createTime | formatTime }}</p>
      <nuxt-link class="cat-link" :to="`/search/category/${post.categoryId}`">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cat"></use>
        </svg>{{ post.categoryName }}
      </nuxt-link>
    </div>
    <h4 class="title">
      <nuxt-link class="title-link" :to="`/post/${post.id}`">{{ post.title }}</nuxt-link>
    </h4>
    <div class="small-screen-meta">
      <nuxt-link :to="`/category/${post.categoryId}`" class="cat-link">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cat"></use>
        </svg>{{ post.categoryName }}
      </nuxt-link>
      <span class="time">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-time"></use>
        </svg>{{ post.createTime | formatTimeDate }}
      </span>
    </div>
    <div class="markdown-body" v-html="markdownContent"></div>
    <p class="more">
      <nuxt-link :to="`/post/${post.id}`">
        MORE<svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-more"></use>
        </svg>
      </nuxt-link>
    </p>
  </section>
</template>

<script>
import moment from 'moment';
import marked from 'marked';

export default {
  props: {
    post: Object
  },
  data () {
    return { markdownContent: '' };
  },
  created () {
    let markdown = marked(this.post.content, { sanitize: true });
    let markdownArr = markdown.split(/\n/);
    let showSize = markdownArr.length > 10 ? 10 : markdownArr.length;
    this.markdownContent = markdownArr.slice(0, showSize).join('\n');
  },
  filters: {
    formatTime (time) {
      return moment(time).format('MM月DD, YYYY');
    },
    formatTimeDate (time) {
      moment.locale('zh-cn');
      return moment(time).format('YYYY年MM月DD日 dddd a');
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
  border-radius: 0.2em;

  .title {
    font-size: 2.2em;
    color: #333;
    line-height: 1.3;
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
      width: 0.9em;
      height: 0.9em;
      vertical-align: -0.1em;
      margin-right: 0.4em;
    }
  }
  .small-screen-meta {
    margin-bottom: 2em;
    font-size: 1em;
    color: #888;
    padding: 0.2em;
    .cat-link {
      margin-right: 2em;
    }
    .icon {
      width: 0.9em;
      height: 0.9em;
      vertical-align: -0.1em;
      margin-right: 0.4em;
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
      width: 0.9em;
      height: 0.9em;
      vertical-align: -0.06em;
      margin-left: 0.3em;
    }
  }
}
</style>
