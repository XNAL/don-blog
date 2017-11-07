<template>
  <section class="laboratory"> 
    <project-list v-for="project in projectList" :project="project" :key="project.id"></project-list>
  </section>
</template>

<script>
import Project from '~/components/Project.vue';

export default {
  data () {
    return {
      projectList: []
    };
  },
  components: {
    'project-list': Project
  }
};
</script>

<style lang="scss" scoped>
.laboratory {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  padding: 2em 0 5em;
}
</style>


