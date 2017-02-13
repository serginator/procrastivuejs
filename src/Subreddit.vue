<template>
    <div class="subreddit">
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
  name: 'subreddit',
  props: ['name'],
  data: function() {
    return {
      posts: []
    }
  },
  created: function() {
    var that = this;
    fetch('https://www.reddit.com/r/' + this.name + '/top.json?limit=5')
      .then(function(resp) {
        if (resp.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + resp.status);
          return;
        }
        resp.json().then(function(data) {
            console.log(data);
            that.posts = data.data.children;
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
