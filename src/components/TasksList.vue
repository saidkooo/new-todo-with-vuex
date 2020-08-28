<template>
    <div class="task-list">
        <Task :task="task"
        v-for="(task, index) in tasks"
        :key="index"
        :index="index"/>
    </div>
</template>
<script>

import Task from "./Task";
export default {
    name: "TasksList",
    components: {Task},
    props: ["tasks"],
    methods: {
    
    },
}
</script>