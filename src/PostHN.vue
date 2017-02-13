<template>
  <div class="posthn">
    <a :href="item.url" style="background-image: url(src/img/placeholder.png)"
         target="_blank" class="thumbnail"></a>
    <div class="details">
      <a :href="item.url" :title="item.title" target="_blank" class="title">
        {{ item.title | truncate}}
      </a>
      <div class="action-buttons">
        <a :href="item.url" title="Vote">
          <i class="material-icons">thumbs_up_down</i>
          {{item.score}}
        </a>
        <a :href="item.url" title="Go to discussion">
          <i class="material-icons">forum</i>
          {{item.num_comments}}
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'posthn',
  props: ['item']
};
</script>

<style>
  .posthn{
    display: flex;
  }
  .posthn .thumbnail{
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
  .posthn .details{
    display: flex;
    flex-direction: column;
  }
  .posthn .details .title{
    font-size: 15px;
    margin-bottom: 3px;
    color: #04477b;
  }
  .posthn .details .title:visited{
    color: purple;
  }
  .posthn .details .action-buttons a{
    font-size: 11px;
    margin-right: 4px;
    display: inline-block;
    color: #666;
  }
  .posthn .details .action-buttons i{
    font-size: 10px;
    margin-right: 1px;
  }
</style>
