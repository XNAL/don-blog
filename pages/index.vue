<template>
  <section class="index"> 
    <post-list v-for="post in postList" :post="post" :key="post.id"></post-list>
    <load-more :is-no-more="isNoMore" :is-show-loading="isShowLoading" @load-more="loadMore"></load-more>
  </section>
</template>

<script>
import axios from 'axios';
import Post from '~/components/Post.vue';
import LoadMore from '~/components/LoadMore.vue';

export default {
  data () {
    return {
      isShowLoading: false,
      isNoMore: false,
      page: 1
    };
  },
  asyncData () {
    const pageNum = 10;
    return axios.get(`/post/getPostList?page=1&pageNum=${pageNum}`).then(res => {
      if (res.data.success === 1) {
        let noMore = false;
        if (res.data.posts.length < pageNum) {
          noMore = true;
        }
        return {
          postList: res.data.posts,
          isNoMore: noMore,
          pageNum: pageNum
        };
      } else {
        return { postList: [] };
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
        axios.get(`/post/getPostList?page=${this.page}&pageNum=${this.pageNum}`).then(res => {
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
  }
};
</script>

