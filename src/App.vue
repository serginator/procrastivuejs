<template>
  <div id="app">
    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
    <div class="container">
      <subreddit name="aww"></subreddit>
      <subreddit name="space"></subreddit>
      <subreddit name="gifs"></subreddit>
      <subreddit name="food"></subreddit>
      <subreddit name="comics"></subreddit>
      <subreddit name="sports"></subreddit>
    </div>
  </div>
</template>

<script>
import Subreddit from './Subreddit.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to procrastivuejs'
    }
  },
  components: {
    Subreddit
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
}
</style>
