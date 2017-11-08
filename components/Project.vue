<template>
  <div class="project">
    <a :href="project.link"  target="_blank" class="no-underline">
      <img class="poster" :src="project.poster" alt="">
      <div class="info">
        <p class="title" :title="project.name">{{ project.name }}</p>
        <p class="desc" :title="project.description">{{ project.description }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
.project {
  position: relative;
  overflow: hidden;
  height: 20em;
  border: 1px solid #eee;
  box-shadow: 2px 2px 2px #ddd;

  a {
    display: block;
    height: 100%;
  }

  img {
    max-width: 100%;
  }

  .info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2em;
    z-index: 99;
    padding: 1em;
    background-color: #fff;
    transition: 0.2s all linear;
    border-top: 1px solid $base-color;

    &:hover {
      bottom: 0;
      border: 1px solid $base-color;
    }

    p {
      box-sizing: border-box;
      font-size: 1em;
      color: #999;
      line-height: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .title {
      color: #333;
      margin-bottom: 1em;
    }
  }
}
</style>


