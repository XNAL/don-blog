<template>
  <div class="project">
    <img class="poster" :src="project.poster" alt="">
    <div class="info">
      <p class="title" :title="project.title">{{ project.title }}</p>
      <p class="desc" :title="project.description">{{ project.description }}</p>
    </div>
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
.project {
  position: relative;
  width: 20em;
  height: 20em;
  float: left;

  img {
    width: 100%;
    height: 100%;
  }

  .info {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>


