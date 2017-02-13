<template>
    <div class="slashdot">
        <h2>{{ name | uppercase }}</h2>
        <ul class="item-list">
            <li v-for="obj in posts">
                <post :item="obj"></post>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
import Post from './Post.vue';
export default {
  name: 'slashdot',
  props: ['name'],
  data: function() {
    return {
      posts: []
    }
  },
  created: function() {
    var that = this;
    fetch('http://slashdot-api.herokuapp.com/slashdot_postings/search')
      .then(function(resp) {
        if (resp.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + resp.status);
          return;
        }
        resp.json().then(function(data) {
          that.posts = [];
          for (var i = 0, n = 10; i < n; i++) {
            that.posts.push({
              title: data[i].title,
              score: data[i].score,
              num_comments: data[i].comment_count,
              url: data[i].permalink,
              thumbnail: null
            });
          }
        });
      });
  },
  components: {
    post: Post
  }
};
</script>

<style type="text/css">
  .subreddit{
    flex: 0 0 33%;
    min-width: 400px;
    padding: 20px 42px;
  }
  .subreddit h2{
    font-size: 18px;
    margin-bottom: 10px;
  }
  .subreddit .item-list{
    border-top: 1px solid #bec9d0;
    padding-top: 20px;
    list-style: none;
  }
  .subreddit .item-list li{
    margin-bottom: 17px;
  }
  @media(max-width: 500px){
    .subreddit{
      min-width: 300px;
      padding: 20px 15px;
    }
  }
</style>
