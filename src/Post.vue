<template>
  <div class="post">
    <a :href="item.url" :style="getImageBackgroundCSS(item.thumbnail)"
         target="_blank" class="thumbnail"></a>
    <div class="details">
      <a :href="item.url" :title="item.title" target="_blank" class="title">
        {{ item.title | truncate}}
      </a>
      <div class="action-buttons">
        <a :href="item.url" v-if="item.score" title="Vote">
          <i class="material-icons">thumbs_up_down</i>
          {{item.score}}
        </a>
        <a :href="item.url" v-if="item.num_comments" title="Go to discussion">
          <i class="material-icons">forum</i>
          {{item.num_comments}}
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'post',
  props: ['item'],
  methods: {
    getImageBackgroundCSS: function(img) {
      if (img && img !== 'self' && img !== 'nsfw') {
        return 'background-image: url(' + img + ')';
      }
      else {
        return 'background-image: url(src/img/placeholder.png)';
      }
    }
  }
};
</script>

<style>
  .post{
    display: flex;
  }
  .post .thumbnail{
    display: block;
    flex: 0 0 60px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-right: 10px;
    border-radius: 4px;
    margin-right: 12px;
  }
  .post .details{
    display: flex;
    flex-direction: column;
  }
  .post .details .title{
    font-size: 15px;
    margin-bottom: 3px;
    color: #04477b;
  }
  .post .details .title:visited{
    color: purple;
  }
  .post .details .action-buttons a{
    font-size: 11px;
    margin-right: 4px;
    display: inline-block;
    color: #666;
  }
  .post .details .action-buttons i{
    font-size: 10px;
    margin-right: 1px;
  }
</style>
