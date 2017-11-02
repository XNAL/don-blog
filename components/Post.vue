<template>
  <section class="post">
    <p class="time">{{ post.time }}</p>
    <h4 class="title">
      <nuxt-link class="cat-link" :to="{ name: 'category', params: { id: post.catId }}">{{ post.catName }}</nuxt-link>
      <nuxt-link class="title-link" :to="{ name: 'post', params: { id: post.id }}">{{ post.title }}</nuxt-link>
    </h4>
    <p class="content"> {{ post.content }}</p>
  </section>
</template>

<script>
export default {
  props: {
    post: Object
  }
};
</script>

<style lang="scss" scoped>
.post {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 10px 20px;

  .title {
    font-size: 16px;
    color: #333;
    line-height: 2;
    margin-bottom: 10px;

    .cat-link {
      position: relative;
      display: inline-block;
      padding: 1px 10px 3px 15px;
      margin-top: -2px;
      margin-right: 30px;
      font-size: 12px;
      color: #fff;
      box-sizing: border-box;
      background-color: #2d8cf0;
      border-radius: 4px 2px 2px 4px;
      &::after {
        position: absolute;
        top: 0;
        left: 100%;
        content: '';
        width: 0;
        height: 0;
        border-top: 14px solid transparent;
        border-left: 20px solid #2d8cf0;
        border-bottom: 14px solid transparent;
      }
    }
  }
  .content {
    font-size: 14px;
    color: #555;
    line-height: 1.5;
  }
  .time {
    position: absolute;
    right: -32px;
    top: 16px;
    width: 120px;
    transform: rotate(45deg);
    text-align: center;
    font-size: 12px;
    line-height: 24px;
    color: #666;
    background: #e5e5e5;
    filter: alpha(opacity=80);
    background: hsla(0,0%,80%,.6);
  }
}
</style>
