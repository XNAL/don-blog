<template>
    <header>
      <section class="header-container container">
				<div class="logo-title">
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
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  line-height: 60px;
  background-color: rgba(255, 255, 255, 0.6);

  .header-container {
    color: #2d8cf0;

    h2 {
      float: left;
      font-size: 32px;
      text-align: left;
      font-weight: 500;
      width: 200px;
    }
    .desc {
      float: left;
      font-size: 18px;
    }
  }
}
</style>


