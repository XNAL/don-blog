<template>
  <section class="comment-section">
    <section class="comment-box">
      <div class="curve"></div>
      <div class="login-mask">
        <div class="login">登录</div>
      </div>
      <div class="content-area">
        <textarea rows="6" v-model="newComment.content" placeholder="此时此刻此地，要不要说点什么呢？"></textarea>
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
              <img :src="comment.avater" alt="头像">
            </div>
            <div class="comment-item-info">
              <div class="comment-info-time">
                <p class="user-name">{{ comment.userName }}</p>
                <p class="comment-time">{{ comment.createdTime | formatTime }}</p>
              </div>
              <div class="comment-item-content">
                {{ comment.content }}
                <span>点赞</span>
                <span>回复</span>
              </div>
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
      comments: []
    };
  },
  filters: {
    formatTime: function (time) {
      return moment(time).format('YYYY-MM-DD');
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
    }
  },
  mounted () {
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
      text-align: center;
      color: $base-color;
      line-height: 3em;
      z-index: 1001;
      cursor: pointer;
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
      margin-top: 1em;
      padding: 0 0 1em 4em;
      border-bottom: 1px dashed #ccc;

      .user-avater {
        position: absolute;
        top: 0;
        left: 0;
        width: 3em;
        height: 3em;
        border-radius: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .comment-item-info {
        .comment-info-time {
          font-size: 1em;
          color: #666;
          line-height: 1.5;
          .comment-time {
            color: #999;
          }
        }
        .comment-item-content {
          margin-top: 1em;
          line-height: 1.5;
          cursor: pointer;

          span {
            margin-left: 1em;
            display: none;
          }
          &:hover {
            span {
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>


