<template>
  <div id="app">
    <h1>{{tit}}</h1>
    <ol class="todos">
      <li v-for="(todo, index) in todos" :data-index="index" :class="{'finish':todo.isFinished}">{{index + 1}}{{todo.things}}------{{todo.time | time}}</li>
    </ol>
  </div>
</template>

<script>
// import './assets/app.less';

export default {
  name: 'app',
  data () {
    return {
      tit: 'Vue-todos',
      todos: [{
        things: '上班去',
        isFinished: false,
        time: Date.now()
      }, {
        things: '上班中',
        isFinished: false,
        time: Date.now() + 30000
      }, {
        things: '下班了',
        isFinished: false,
        time: Date.now() + 50000
      }]
    }
  }
}
</script>
<!-- 仅作用于当前的组件 -->
<style scope>
@import './assets/app.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
