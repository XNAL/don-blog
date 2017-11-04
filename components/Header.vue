<template>
    <header>
      <section class="header-container container">
				<div class="logo-title">
          <img class="logo" src="/logo.png" alt="logo">
					<h2>DON</h2>
          <span class="desc">Talk is cheap. Show me the code.</span>
				</div>
			</section>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4.2em;
  line-height: 4.2em;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9999;

  .header-container {
    color: $base-color;
    .logo {
      float: left;
      margin: 0.6em 1em 0;
      width: 3em;
      height: 3em;
    }
    h2 {
      float: left;
      font-size: 2.2em;
      text-align: left;
      font-weight: 500;
      width: 5.5em;
    }
    .desc {
      float: left;
      font-size: 1em;
    }
  }
}
</style>


