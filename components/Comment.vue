<template>
  <section class="comment-section">
    <section class="comment-box">
      <div class="curve"></div>
      <div class="login-mask">
        <div class="login">
          <img :src="guestAvatar" alt="用户头像" v-if="guestAvatar !== ''">
          <svg aria-hidden="true" v-else @click="githubLogin" class="octicon octicon-mark-github" height="42" version="1.1" viewBox="0 0 16 16" width="42">
            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </div>
      </div>
      <div class="content-area">
        <div class="content-area-mask" v-if="!isLogin">
          <p class="login-tips">暂无评论权限，请使用GitHub账号登陆后发表评论。</p>
        </div>
        <textarea rows="6" v-model="newComment.content" ref="newComment"></textarea>
      </div>
      <div class="comment-action">
        <button class="btn-comment" @click="addNewComment">评论一下</button>
      </div>
    </section>
    <section class="comment-list-section">
      <div class="empty-comment" v-if="comments.length === 0">还没有评论，快来抢沙发吧！</div>
      <div class="comment-list-area" v-else>
        <div class="comment-list-title">最新评论</div>
        <ul class="comment-list">
          <li class="comment-list-item" v-for="comment in comments" :key="comment.id">
            <div class="user-avater">
              <img :src="comment.avatar" alt="头像">
            </div>
            <div class="comment-item-info">
              <p class="user-name">{{ comment.userName }}</p>
              <div class="comment-item-content">
                {{ comment.content }}
              </div>
              <p class="comment-time">{{ comment.createdTime | formatTime }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  props: {
    postId: String
  },
  data () {
    return {
      author: {
        id: 0,
        name: '',
        avatar: ''
      },
      newComment: {
        id: 0,
        postId: 0,
        replyId: 0,
        userId: 0,
        content: ''
      },
      guestAvatar: '',
      isLogin: false,
      comments: []
    };
  },
  filters: {
    formatTime: function (time) {
      let commentTime = moment(time);
      let formatDate = commentTime.year() === moment(Date.now()).year() ? 'MM月DD日' : 'YYYY年MM月DD日';
      return commentTime.format(formatDate);
    }
  },
  methods: {
    getCommentsByPostId: function () {
      axios.get(`/post/getCommentsByPostId/${this.postId}`)
        .then(res => {
          if (res.data.success === 1) {
            this.comments = res.data.comments;
          }
        });
    },
    addNewComment: function () {
      if (this.newComment.content === '') {
        alert('评论内容不能为空！');
        return;
      }
      axios.post(`/post/addComment`, this.newComment)
        .then(res => {
          if (res.data.success === 1) {
            this.newComment.id = res.data.id;
          }
        });
    },
    githubLogin: function () {
      window.location.href = 'https://github.com/login/oauth/authorize?client_id=&redirect_uri=http://localhost:3000/login&scope=user:email';
      window.localStorage.setItem('GITHUB_LOGIN_REDIRECT_URL', `${this.$route.path}?comment=new`);
    }
  },
  mounted () {
    if (this.$route.query.comment && this.$route.query.comment === 'new') {
      window.localStorage.removeItem('GITHUB_LOGIN_REDIRECT_URL');
      let guest = JSON.parse(window.localStorage.getItem('GITHUB_LOGIN_GUEST'));
      this.guestAvatar = guest.avatar;
      this.isLogin = true;

      setTimeout(() => {
        this.$refs.newComment.scrollIntoView();
        this.$refs.newComment.focus();
      }, 500);
    }
    if (this.postId) {
      this.getCommentsByPostId();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
.comment-section {
  margin: 3em auto;
  .comment-box {
    position: relative;
    padding-top: 3.5em;
    .curve {
      position: absolute;
      top: 0;
      left: 0.2em;
      width: 4em;
      height: 4em;
      border-radius: 100%;
      border: 1px solid $base-color;
      background: #fff;
      z-index: 999;
    }
    .login-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 10em;
      height: 3.5em;
      background: #fff;
      z-index: 1000;
    }
    .login {
      position: absolute;
      top: 0.7em;
      left: 0.7em;
      width: 3em;
      height: 3em;
      border-radius: 100%;
      border: 1px solid $base-color;
      color: $base-color;
      z-index: 1001;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
    .content-area {
      position: relative;
      .content-area-mask {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(255,255,255,0.6);
        z-index: 999;
        .login-tips {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #999;
          line-height: 1.6;
        }
      }
      textarea {
        padding: 0.8em;
        line-height: 1.5;
        width: 100%;
        resize: none;
        border: 1px solid $base-color;
        outline: none;
        border-radius: 0.4em;
        box-sizing: border-box;
      }
    }
    .comment-action {
      margin-top: 0.4em;
      position: relative;
      .btn-comment {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.6em 1em;
        border-radius: 0.4em;
        color: #fff;
        letter-spacing: 0.1em;
        background: $base-color;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
  .comment-list-section {
    margin-top: 4.2em;
    .empty-comment {
      font-size: 0.8em;
      color: #999;
      line-height: 2.6em;
      text-align: center;
      border-radius: 0.4em;
      background: #f0f0f0;
    }
    .comment-list-title {
      font-size: 1.2em;
      line-height: 2;
      padding-left: 0;
      border-bottom: 1px solid #ddd;
    }
    .comment-list-item {
      position: relative;
      padding: 1.2em 1.25em 1.2em 5.4em;
      border-bottom: 1px solid #e7e7eb;

      .user-avater {
        position: absolute;
        top: 1.2em;
        left: 0;
        width: 4em;
        height: 4em;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .comment-item-info {
        .user-name {
          font-size: 1.2em;
          font-weight: 400;
          color: #9a9a9a;
          line-height: 1.2;
          margin-bottom: 0.4em;
        }
        .comment-time {
          margin-top: 0.5em;
          font-size: 1em;
          color: #9a9a9a;
        }
        
        .comment-item-content {
          padding: 0.5em 0;
          line-height: 1.5;
          color: #353535;
        }
      }
    }
  }
}
</style>


