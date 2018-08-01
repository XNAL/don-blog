<template>
  <section class="category">
    <p class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cat"></use>
      </svg>{{ categoryName }}
    </p>
    <post-list v-for="post in postList" :post="post" :key="post.id"></post-list>
    <load-more :is-no-more="isNoMore" :is-show-loading="isShowLoading" @load-more="loadMore"></load-more>
  </section>
</template>

<script>
import axios from 'axios';
import Post from '~/components/Post.vue';
import LoadMore from '~/components/LoadMore.vue';
import qs from 'qs';

export default {
  head () {
    return {
      title: `${this.categoryName} - Powered by Don`
    };
  },
  data () {
    return {
      isShowLoading: false,
      isNoMore: false,
      page: 1
    };
  },
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  asyncData ({ params }) {
    const pageNum = 10;
    return axios.get(`/post/category/${params.id}?page=1&pageNum=${pageNum}`).then(res => {
      if (res.data.success === 1) {
        let noMore = false;
        if (res.data.posts.length < pageNum) {
          noMore = true;
        }
        return {
          categoryId: params.id,
          categoryName: res.data.name,
          postList: res.data.posts,
          isNoMore: noMore,
          pageNum: pageNum
        };
      } else {
        return {
          categoryId: params.id,
          categoryName: '',
          postList: []
        };
      }
    });
  },
  components: {
    'post-list': Post,
    LoadMore
  },
  methods: {
    loadMore: function () {
      if (!this.isNoMore) {
        this.isShowLoading = true;
        this.page = this.page + 1;
        axios.get(`/post/category/${this.categoryId}?page=${this.page}&pageNum=${this.pageNum}`).then(res => {
          if (res.data.success === 1) {
            if (res.data.posts.length < this.pageNum) {
              this.isNoMore = true;
            }
            this.postList.push(...res.data.posts);
            this.isShowLoading = false;
          }
        });
      }
    }
  },
  created () {
    axios.post('/track/addEventTrack', qs.stringify({
      key: 'VIEW_POST_BY_CATEGORY',
      id: this.categoryId
    }));
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 0.5em;
  padding: 0.5em 0;
  font-size: 1.8em;
  color: #333;
  background-color: #fff;
  line-height: 2;
  text-align: center;

  .icon {
    width: 0.9em;
    height: 0.9em;
    vertical-align: -0.1em;
    margin-right: 0.3em;
  }
}
</style>

