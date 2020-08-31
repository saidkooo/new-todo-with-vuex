<template>
  <div id="app">
    <h1>Какие планы?</h1>
    <TasksList :tasks="tasks"/>
    <AddTask v-on:add-accept="addTask" />
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
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  h1 {
    color: #fff;
    padding-bottom: 50px ;
  }
  body {
    background-blend-mode: multiply;
    background: url("assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
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
  
</style>
