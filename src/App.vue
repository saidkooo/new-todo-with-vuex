<template>
  <div id="app">
    <h1>Welcome to TODO list</h1>
    <TasksList :tasks="tasks"/>
    <AddTask v-on:add-accept="addTask"/>
  </div>
</template>

<script>
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
export default {
  name: 'App',
  components:{
    TasksList,
    AddTask,
  },
  methods: {
    addTask(newTask) {
      this.$store.dispatch("ADD_TASK", newTask)
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.TASKS
    },
  }
}
</script>

<style>
  body {
    background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(84,84,251,1) 21%, rgba(0,212,255,1) 100%);
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .buttons {
    font-size: 16px;
    background: none;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 5px;
    height: 30px;
    width: 100px;
  }
  .buttons:hover {
    color: #000;
    background: #fff;
  }
</style>
