<template>
  <section class="post-section">
		<h2 class="title">{{ post.title }}</h2>
    <div class="metas">
      <nuxt-link :to="`/category/${post.categoryId}`" class="cat-link">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cat"></use>
        </svg>{{ post.categoryName }}
      </nuxt-link>
      <span class="time">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-time"></use>
        </svg>{{ post.createTime | formatTime }}
      </span>
    </div>
    <div class="markdown-body content" v-html="markdownContent"></div>
    <div class="tags">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tag"></use>
      </svg>
      <nuxt-link class="tag" v-for="tag in tags" :key="tag.tagId" :to="`/search/tag/${tag.tagId}`">{{ tag.tagName }}</nuxt-link>
    </div>
    <div class="prev-next">
      <p class="prev fl">
        <nuxt-link :to="`/post/${prev.id}`">
          <svg class="icon" aria-hidden="true" v-show="prev.id">
            <use xlink:href="#icon-next"></use>
          </svg>{{ prev.title }}
        </nuxt-link>
      </p>
      <p class="next fr">
        <nuxt-link :to="`/post/${next.id}`">
          {{ next.title }}
          <svg class="icon" aria-hidden="true" v-show="next.id">
            <use xlink:href="#icon-next"></use>
          </svg>
        </nuxt-link>
      </p>
    </div>
   </section>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import marked from 'marked';

export default {
  head () {
    return {
      title: `${this.post.title} - Powered by Don`
    };
  },
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  asyncData ({ params }) {
    return axios.get(`/post/getPost/${params.id}`).then(res => {
      if (res.data.success === 1) {
        return {
          post: res.data.post,
          tags: res.data.tags,
          prev: res.data.prev,
          next: res.data.next
        };
      } else {
        return { post: {}, tags: [], prev: {}, next: {} };
      }
    });
  },
  data () {
    return { markdownContent: '' };
  },
  created () {
    this.markdownContent = marked(this.post.content, { sanitize: true });
  },
  filters: {
    formatTime (time) {
      moment.locale('zh-cn');
      return moment(time).format('YYYY年MM月DD日 dddd a');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/sass/app';
.post-section {
  padding: 2em 1.5em;
  background-color: #fff;

  .title {
    margin: 0.5em auto 0.8em;
    text-align: center;
    font-size: 2.2em;
    color: #333;
    font-weight: 300;
  }
  .metas {
    margin-bottom: 2em;
    font-size: 1em;
    color: #888;
    text-align: center;
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
  .tags {
    margin: 3em auto;
    a {
      display: inline-block;
      padding: 0.4em 0.6em;
      margin-right: 0.5em;
      border-radius: 0.2em;
      background-color: rgba(27,31,35,.05);
      color: $base-color;
    }
    .icon {
      width: 1em;
      height: 1em;
      margin-right: 0.5em;
    }
  }
  .prev-next {
    overflow: hidden;
    border-top: 1px dashed $base-color;
    p {
      width: 50%;
      margin: 1.5em auto;
    }
    .prev {
      .icon {
        transform: rotate(180deg);
      }
    }
    .next {
      text-align: right;
    }
    
    .icon {
      width: 0.9em;
      height: 0.9em;
      vertical-align: -0.1em;
      margin-right: 0.4em;
    }
  }
}
</style>

