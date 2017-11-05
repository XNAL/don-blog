<template>
  <section class="index"> 
    <post-list v-for="post in postList" :post="post" :key="post.id"></post-list>
    <div class="post-more" @click="loadMore">
      <p class="load-more" v-show="!isNoMore && !isShowLoading">加载更多</p>
      <p class="no-more" v-show="isNoMore">没有更多了</p>
      <loading v-show="isShowLoading"></loading>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Post from '~/components/Post.vue';
import Loading from '~/components/Loading.vue';

export default {
  data () {
    return {
      isShowLoading: false,
      isNoMore: false,
      pageNum: 10
    };
  },
  asyncData () {
    return axios.get(`/post/getPostList?page=1&pageNum=10`).then(res => {
      if (res.data.success === 1) {
        let noMore = false;
        if (res.data.posts.length < 10) {
          noMore = true;
        }
        return {
          postList: res.data.posts,
          isNoMore: noMore
        };
      } else {
        return { postList: [] };
      }
    });
  },
  components: {
    'post-list': Post,
    Loading
  },
  methods: {
    loadMore: function () {
      if (!this.isNoMore) {
        this.isShowLoading = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.post-more {
  margin-bottom: 1em;
  padding: 0.5em 0;
  line-height: 2em;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
}
</style>

