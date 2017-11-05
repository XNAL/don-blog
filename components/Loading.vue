<template>
    <section class="loading">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
    </section>
</template>

<style lang="scss" scoped>
@import '~assets/sass/app';
.loading {
  width: 2em;
  height: 2em;
  position: relative;
  margin: 0 auto;
  span {
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-radius: 50%;
    background: $base-color;
    position: absolute;
    transform: scale(0.4);
    animation: load 0.8s ease infinite;
  }

  @keyframes load {
    0% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(0.4);
      opacity: 0.5;
    }
  }

  span:nth-child(1) {
    left: 0;
    top: 50%;
    margin-top: -0.2em;
    animation-delay: 0.1s;
  }

  span:nth-child(2) {
    left: 0.2em;
    top: 0.2em;
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    left: 50%;
    top: 0;
    margin-left: -0.2em;
    animation-delay: 0.3s;
  }

  span:nth-child(4) {
    top: 0.2em;
    right: 0.2em;
    animation-delay: 0.4s;
  }

  span:nth-child(5) {
    right: 0;
    top: 50%;
    margin-top: -0.2em;
    animation-delay: 0.5s;
  }

  span:nth-child(6) {
    right: 0.2em;
    bottom: 0.2em;
    animation-delay: 0.6s;
  }

  span:nth-child(7) {
    bottom: 0;
    left: 50%;
    margin-left: -0.2em;
    animation-delay: 0.7s;
  }

  span:nth-child(8) {
    bottom: 0.2em;
    left: 0.2em;
    animation-delay: 0.8s;
  }
}
</style>
