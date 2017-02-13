<template>
  <div class="post">
    <a :href="item.data.url" :style="getImageBackgroundCSS(item.data.thumbnail)"
         target="_blank" class="thumbnail"></a>
    <div class="details">
      <a :href="item.data.url" :title="item.data.title" target="_blank" class="title">
        {{ item.data.title | truncate}}
      </a>
      <div class="action-buttons">
        <a :href="getUrl()" title="Vote">
          <i class="material-icons">thumbs_up_down</i>
          {{item.data.score}}
        </a>
        <a :href="getUrl()" title="Go to discussion">
          <i class="material-icons">forum</i>
          {{item.data.num_comments}}
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
        return 'background-image: url(assets/img/placeholder.png)';
      }
    },
    getUrl: function() {
      return `http://reddit.com${this.data.permalink}`;
    }
  }
};
</script>

<style>

</style>
