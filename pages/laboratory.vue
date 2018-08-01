<template>
  <section class="laboratory"> 
    <h2 class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-lab"></use>
      </svg>实验室
    </h2>
    <div class="proj-list">
      <project-list class="lab-project" 
                    v-for="(project, index) in projectList" 
                    :project="project"
                    :position="`${index % 2 === 0 ? 'left' : 'right'}`"
                    :key="project.id"></project-list>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Project from '~/components/Project.vue';
import qs from 'qs';

export default {
  head () {
    return {
      title: '实验室 - Powered by Don'
    };
  },
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
  },
  created () {
    axios.post('/track/addEventTrack', qs.stringify({
      key: 'VIEW_LABORATORY'
    }));
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
}
</style>


