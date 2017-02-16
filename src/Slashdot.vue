<template>
    <div class="slashdot">
        <a href="https://slashdot.org/popular"><h2>Slashdot (TOP 10)</h2></a>
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
    var query = {
      url: 'https://slashdot.org/popular',
      type: 'html',
      selector: '.story-title a',
      extract: ['text', 'href']
    },
    uriQuery = encodeURIComponent(JSON.stringify(query)),
    request = 'https://noodle-heroku.herokuapp.com/?q=' + uriQuery;

    fetch(request).then(function(resp) {
      if (resp.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + resp.status);
        return;
      }
      resp.json().then(function(_data) {
        var data = _data[0].results,
            i, n;
        n = data.length > 10 ? 10 : data.length;
        that.posts = [];
        for (i = 0; i < n; i++) {
          that.posts.push({
            title: data[i].text,
            score: null,
            num_comments: null,
            url: data[i].href,
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
  .slashdot{
    flex: 0 0 33%;
    min-width: 400px;
    padding: 20px 42px;
  }
  .slashdot h2{
    font-size: 18px;
    margin-bottom: 10px;
  }
  .slashdot .item-list{
    border-top: 1px solid #bec9d0;
    padding-top: 20px;
    list-style: none;
  }
  .slashdot .item-list li{
    margin-bottom: 17px;
  }
  @media(max-width: 500px){
    .slashdot{
      min-width: 300px;
      padding: 20px 15px;
    }
  }
</style>
