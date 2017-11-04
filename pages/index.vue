<template>
  <section class="index">
    <!-- <don-header/>
    <div class="body-container container">
      <don-menu/>
      <div class="main-body">
        <post-list v-for="post in postList" :post="post" :key="post.id"></post-list>
      </div>
    </div> -->    
    <post-list v-for="post in postList" :post="post" :key="post.id"></post-list>
  </section>
</template>

<script>
import axios from 'axios';

import Post from '~/components/Post.vue';

export default {
  asyncData () {
    return axios.get(`/post/getPostList?page=1`).then(res => {
      return { postList: res.data.data.concat(res.data.data) };
    });

    // if (res.data.success === 1) {
    //   return { postList: res.data.data };
    // } else {
    //   return { postList: [] };
    // }
  },
  components: {
    'post-list': Post
  }
};
</script>

<style lang="scss" scoped>
.index {
  position: relative;
  margin-left: 15em;
}
</style>
