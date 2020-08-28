<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SearchTask :tasks="tasks"/>
    <TasksList :tasks="tasks"/>
    <AddTask v-on:add-accept="addTask"/>
  </div>
</template>

<script>
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
import SearchTask from "./components/SearchTask";
export default {
  name: 'App',
  components:{
    TasksList,
    AddTask,
    SearchTask,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
