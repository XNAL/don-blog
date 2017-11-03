<template>
  <section class="index">
    <don-header/>
    <div class="body-container container">
      <don-menu/>
      <div class="main-body">
        <post-list v-for="post in postList" :post="post" :key="post.id"></post-list>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Header from '~/components/Header.vue';
import Menu from '~/components/Menu.vue';
import Post from '~/components/Post.vue';

export default {
  asyncData () {
    return axios.get(`/post/getPostList?page=1`).then(res => {
      console.log('res', res.data.data);
      return { postList: res.data.data };
    });

    // if (res.data.success === 1) {
    //   return { postList: res.data.data };
    // } else {
    //   return { postList: [] };
    // }
  },
  components: {
    'don-header': Header,
    'don-menu': Menu,
    'post-list': Post
  }
};
</script>

<style lang="scss" scoped>
.index {
  min-height: 100vh;
  background: rgba(238, 238, 238, 0.6);

  .body-container {
    position: relative;
    margin-top: 60px;
    padding-top: 10px;

    .main-body {
      position: relative;
      margin-left: 210px;
    }
  }
}
</style>
