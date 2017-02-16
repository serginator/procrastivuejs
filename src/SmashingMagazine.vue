<template>
    <div class="smashingmagazine">
        <a :href="'https://www.smashingmagazine.com/tag/' + name"><h2>{{ name | uppercase }}</h2></a>
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
  name: 'smashingmagazine',
  props: ['name'],
  data: function() {
    return {
      posts: []
    }
  },
  created: function() {
    var that = this,
      query = {
        url: 'https://www.smashingmagazine.com/tag/' + this.name,
        type: 'html',
        map: {
          titles: {
            selector: 'article.post h2 a span',
            extract: ['text']
          },
          urls: {
            selector: 'article.post h2 a',
            extract: ['href']
          },
          thumbnails: {
            selector: 'article.post .attachment-thumbnail',
            extract: ['src']
          }
        }
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
        n = data.titles.length > 10 ? 10 : data.titles.length;
        that.posts = [];
        for (i = 0; i < n; i++) {
          that.posts.push({
            title: data.titles[i].text,
            score: null,
            num_comments: null,
            url: data.urls[i].href,
            thumbnail: data.thumbnails[i].src
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
  .smashingmagazine{
    flex: 0 0 33%;
    min-width: 400px;
    padding: 20px 42px;
  }
  .smashingmagazine h2{
    font-size: 18px;
    margin-bottom: 10px;
  }
  .smashingmagazine .item-list{
    border-top: 1px solid #bec9d0;
    padding-top: 20px;
    list-style: none;
  }
  .smashingmagazine .item-list li{
    margin-bottom: 17px;
  }
  @media(max-width: 500px){
    .smashingmagazine{
      min-width: 300px;
      padding: 20px 15px;
    }
  }
</style>
