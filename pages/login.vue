<template>
  <section class="oauth-login-section">
    <div class="login-tips">GitHub正在授权登录中，请稍后...</div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  layout: 'oauth',
  data () {
    return {
      code: ''
    };
  },
  mounted () {
    return axios.get(`/oauth/github/github_oauth?code=${this.$route.query.code}`).then(res => {
      if (res.data.success === 1) {
        let token = res.data.token;
        let userName = res.data.userName;
        let avatar = res.data.avatar;
        window.localStorage.setItem('GITHUB_LOGIN_TOKEN', token);
        window.localStorage.setItem('GITHUB_LOGIN_GUEST', JSON.stringify({ userName: userName, avatar: avatar }));
        let redirectUrl = window.localStorage.getItem('GITHUB_LOGIN_REDIRECT_URL');
        this.$router.push({ path: redirectUrl });
      }
    });
  }
};
</script>

