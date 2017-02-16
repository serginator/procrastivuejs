<template>
    <div class="hackernews">
        <a href="https://news.ycombinator.com/news"><h2>Hacker News (TOP 10)</h2></a>
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
  name: 'hackernews',
  data: function() {
    return {
      posts: []
    }
  },
  created: function() {
    var that = this;
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(function(resp) {
        if (resp.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + resp.status);
          return;
        }
        resp.json().then(function(data) {
            that.posts = [];
            for (var i = 0, n = 10; i < n; i++) {
              fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
                .then(function(r) {
                    r.json().then(function(rdata) {
                        that.posts.push({
                            title: rdata.title,
                            score: rdata.score,
                            num_comments: rdata.descendants,
                            url: rdata.url,
                            thumbnail: null
                        });
                    });
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
  .hackernews{
    flex: 0 0 33%;
    min-width: 400px;
    padding: 20px 42px;
  }
  .hackernews h2{
    font-size: 18px;
    margin-bottom: 10px;
  }
  .hackernews .item-list{
    border-top: 1px solid #bec9d0;
    padding-top: 20px;
    list-style: none;
  }
  .hackernews .item-list li{
    margin-bottom: 17px;
  }
  @media(max-width: 500px){
    .hackernews{
      min-width: 300px;
      padding: 20px 15px;
    }
  }
</style>
