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
import Header from '~/components/Header.vue';
import Menu from '~/components/Menu.vue';
import Post from '~/components/Post.vue';

export default {
  components: {
    'don-header': Header,
    'don-menu': Menu,
    'post-list': Post
  },
  data () {
    return {
      postList: [
        {
          id: 1,
          title: '第一篇文章标题',
          content: '第一篇文章内容是123.',
          catId: 1,
          catName: 'JavaScript',
          time: '2017-11-02'
        },
        {
          id: 2,
          title: '第二篇文章标题',
          content: '第二篇文章内容是123.',
          catId: 2,
          catName: '项目实战',
          time: '2017-08-15'
        }
      ]
    };
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
