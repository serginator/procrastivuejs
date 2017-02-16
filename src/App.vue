<template>
  <div id="app">
    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
    <div class="container">
      <h1>Reddit</h1>
      <subreddit name="aww"></subreddit>
      <subreddit name="javascript"></subreddit>
      <subreddit name="food"></subreddit>
    </div>
    <div class="container">
      <h1>HackerNews</h1>
      <hackernews></hackernews>
    </div>
    <div class="container">
        <h1>Slashdot</h1>
        <slashdot></slashdot>
    </div>
    <div class="container">
        <h1>Medium</h1>
        <medium></medium>
    </div>
  </div>
</template>

<script>
import Subreddit from './Subreddit.vue';
import HackerNews from './HackerNews.vue';
import Slashdot from './Slashdot.vue';
import Medium from './Medium.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to procrastivuejs'
    }
  },
  components: {
    subreddit: Subreddit,
    hackernews: HackerNews,
    slashdot: Slashdot,
    medium: Medium
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 200px;
  height: 200px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
.container{
  padding: 27px 20px;
  margin: 30px auto 50px;
  max-width: 1250px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #fff;
  box-shadow: 0 0 1px #ccc;
}
@media(max-width: 1250px){
  .container{
    justify-content: center;
    margin: 30px 30px 50px 30px;
  }
}
</style>
