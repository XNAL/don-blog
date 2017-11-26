<template>
  <section class="project">
    <div :class="['part-one', `${position === 'right' ? 'right' : 'left'}`]">
      <img :src="project.poster" alt="项目图片">
      <div class="operate">
        <span class="operate-update">
          <svg class="icon" aria-hidden="true" @click="updateProject">
            <use xlink:href="#icon-edit"></use>
          </svg>
        </span>
        <span class="operate-delete">
          <svg class="icon" aria-hidden="true" @click="deleteProject">
            <use xlink:href="#icon-rubbish"></use>
          </svg>
        </span>
      </div>
    </div>
    <div :class="['part-two', `${(position === 'right' ? 'right' : 'left') === 'left' ? 'right' : 'left'}`]">
      <h3 class="name">{{ project.name }}</h3>
      <p class="description">{{ project.description }}</p>
      <p class="link-address" v-if="project.link !== ''">
        <a :href="project.link" class="link" target="_blank">
          <svg class="icon" aria-hidden="true" @click="deleteProject">
            <use xlink:href="#icon-web"></use>
          </svg>在线效果
        </a>
      </p>
      <p class="link-address" v-if="project.github">
        <a :href="project.github" class="github" target="_blank">
          <svg class="icon" aria-hidden="true" @click="deleteProject">
            <use xlink:href="#icon-github"></use>
          </svg>GitHub查看
        </a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    project: Object,
    position: String
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
.project {
  position: relative;
  overflow: hidden;
  margin: 2em auto 4em;
  padding: 0 1em;
  min-height: 14em;
  
  .part-one {
    position: relative;
    width: 50%;
    box-sizing: border-box;
    img {
      width: 100%;
    }

    &.left {
      float: left;
    }
    &.right {
      float: right;
    }
    .operate {
      display: none;
    }
  }
  .part-two {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    padding: 0 1em;
    box-sizing: border-box;
    text-align: center;
    line-height: 2;

    &.left {
      float: left;
      left: 25%;
    }
    &.right {
      float: right;
      left: 75%;
    }

    h3 {
      font-size: 1.5em;
    }
    .link-address {
      margin: 1em auto;
      .icon {
        margin-right: 0.4em;
        width: 0.9em;
        height: 0.9em;
        vertical-align: -0.04em;
      }
    }
    .link,
    .github {
      padding: 0.4em 0.8em;
      font-size: 1em;
      color: #555;
      border: 1px solid #d8dce5;
      border-radius: 0.2em;
      cursor: pointer;
      background-color: #fff;   
      outline: none;

      &:hover {
        color: $base-color;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
      }
    }
  }
}
</style>


