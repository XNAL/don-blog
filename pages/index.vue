<template>
	<section class="index">
    <don-header/>
		<div class="body-container container">
      <don-menu/>
		</div>
	</section>
</template>

<script>
import Header from '~/components/Header.vue';
import Menu from '~/components/Menu.vue';

export default {
  components: {
    'don-header': Header,
    'don-menu': Menu
  }
};
</script>

<style lang="scss" scoped>
.index {
  min-height: 100vh;
  background: rgba(238, 238, 238, 0.6);

  .body-container {
    position: relative;
    margin-top: 10px;
  }
}
</style>
