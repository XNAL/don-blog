<template>
  <section class="laboratory"> 
    <h2 class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-lab"></use>
      </svg>实验室
    </h2>
    <div class="proj-list">
      <project-list class="lab-project" v-for="project in projectList" :project="project" :key="project.id"></project-list>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Project from '~/components/Project.vue';

export default {
  asyncData () {
    return axios.get(`/post/getLaboratory`).then(res => {
      if (res.data.success === 1) {
        return {
          projectList: res.data.posts
        };
      } else {
        return { projectList: [] };
      }
    });
  },
  components: {
    'project-list': Project
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
.laboratory {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: $minHeight;  
  background-color: #fff;
  box-sizing: border-box;
  padding: 2em 0;
  
  .title {
    margin-bottom: 1.2em;
    font-size: 2.5em;
    color: #333;
    line-height: 1;
    text-align: center;

    .icon {
      width: 0.9em;
      height: 0.9em;
      vertical-align: -0.1em;
      margin-right: 0.3em;
    }
  }
  .proj-list {    
    display: flex;
    flex-wrap: wrap;  
    justify-content: space-around;
    
    .lab-project {
      width: 30%;
      margin-bottom: 2em;
    }
  }
}
</style>


