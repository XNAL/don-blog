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
    Loading
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

